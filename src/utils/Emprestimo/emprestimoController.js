import { api } from "../utils";
import { Alert } from 'react-native';


export async function inserirEmprestimo(navigation, nome, telefone){
    await api.get(`/emprestimos/search?nome=${nome}&telefone=${telefone}` )
    .then((response)=>
            {
                if(response.data[0]){ // Array tem o objeto de usuário na primeira posição, logo ele já existe
                Alert.alert(
                    "Erro!",
                    "Emprestimo já existente!"
                );
                }
                else{ // Array vazio, indicando que o usuário não existe
                api.post(`/emprestimos` , {
                    nome: nome,
                    telefone: telefone,
                 
                
                }).then((response)=>{// Enviar dados do usuário
                    Alert.alert(
                    "Sucesso!",
                    "Cadastro de emprestimo concluído!"
                    )
                    navigation.navigate('EmprestimoView');
                }).catch((error) => 
                {
                    console.warn("ERRO!")
                    console.error(error)
                })  
                }     
            })
            .catch((error)=>{
                console.log(error)
            })

}

export async function alterarEmprestimo({id, nome, telefone}){
    
    // console.log(`id: ${id}`)
    // console.log(`nome: ${nome}`)
    // console.log(`telefone: ${telefone}`)
    return api.put(`/emprestimos/${parseInt(id)}`,{
        nome: nome,
        telefone: telefone
    
    }).then(async (response)=>{// Enviar dados do usuário
            // console.log(request.body)
            // console.log(response.data)
            return {title:"Sucesso!",
            text:"Cadastro de emprestimo atualizado!"}
            
            
        }).catch((error) => 
        {    
            console.warn("ERRO!")
            console.error(error)
            return {title: "Ops!",
                text:"Algo deu errado."}
        }) 
}

export async function buscarEmprestimo({id}) {
    return api.get(`/emprestimos/${id}` )
    .then(async (response)=>
    
            { 
        
                if(response.data.erro){
                    //Retornar o código de erro
                    return response.data.erro.errno
                }
                //console.log(response.data)
                //Retornar os dados de busca
                return response.data
                     
            })
            .catch(async (error)=>
            {   
                
                console.warn("ERRO!")
                console.warn(`error: ${error.code}`)
                
               
            })
}

export async function excluirEmprestimo({id}) {
        return api.delete(`/emprestimos/${parseInt(id)}`)
        .then(async (response)=>{// Enviar dados do usuário
            return {title:"Sucesso!",
            text:"Cadastro de emprestimo excluído!"}
            
            
        }).catch((error) => 
        {    
            console.warn("ERRO!")
            console.error(error)
            return {title: "Ops!",
                text:"Algo deu errado."}
        }) 
  
}


export async function listarEmprestimo() {
    return api.get('/emprestimos')
    .then(async (response)=>
            {
                
               return response.data     
            })
            .catch((error)=>{
                console.log(error)
            })

    
}


export async function contagemEmprestimos() {
    return api.get('/emprestimos/contagem')
    .then(async (response)=>
            {   
                return response.data     
            })
            .catch((error)=>{
                
                console.error(error)
            })
}
