import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


{/*---------- <Componentes personalizados> ----------*/}


import { PMInputCadastro, SearchDropDown } from "../../../Components/PMTextInput";
import { PMButton } from "../../../Components/PMButton";
import { inserirEmprestimo } from "../../../utils/Emprestimo/emprestimoController";
import { listarLivro } from "../../../utils/Livro/livroController";
import { listarPessoa } from "../../../utils/Pessoa/pessoaController";
import ClickableDatePicker from "../../../Components/ClickableDatePicker";


async function getLivros(){
  try {
    const response = await listarLivro()
    return response.map((item) => {
      return {key: item.livroId, value: item.titulo}
    })
       
    } catch (error) {
      console.warn(error);
    }
}

async function getPessoas(){
  try{
    const response = await listarPessoa()
    return response.map((item) => {
      return {key: item.pessoaId, value: item.nome}
    })
   } catch(error){
    console.warn(error);
  }
}


export function InserirEmprestimo({ route }) {

    const navigation = useNavigation()
    // Detalhes do livro
    const [livroId, setLivroId] = useState(null)
    const [livrosDropbox, setLivrosDropbox] = useState([]);
 
    // Detalhes da pessoa
    const [pessoaId, setPessoaId] = useState(null)
    const [pessoasDropbox, setPessoasDropbox] = useState([]);

    const [dataEmprestimo, setDataEmprestimo] = useState(new Date())




    useEffect(() => 
    { getLivros()
       .then((livros) => {
         setLivrosDropbox(livros)   
       })
       .catch((error) => {
         console.log(error)
       })}
     
   ,[])
 
   useEffect(() => 
     {getPessoas()
       .then((pessoas) => {
         setPessoasDropbox(pessoas)   
       })
       .catch((error) => {
         console.log(error)
       })}
   ,[])
    return (  
        <View style={ styles.container }>
            <Text style={ styles.title}>Emprestimo</Text>

            <SearchDropDown
          data={livrosDropbox}
          setSelected={(val) => {setLivroId(val)
          console.log(`O livro selecionado é: ${livroId}` )
          console.log(livroId)
        }}
          fieldPlaceHolder={"Selecione um livro"}
          searchPlaceholder={"Procurar por título"}
          save={"key"}
          defaultOption={livrosDropbox[0]}/>
        
      <SearchDropDown
          data={pessoasDropbox}
          setSelected={(val) => {setPessoaId(val)
          console.log(`A pessoa selecionada é: ${pessoaId}` )
          console.log(pessoaId)
        }}
          fieldPlaceHolder={"Selecione uma pessoa"}
          searchPlaceholder={"Procurar por nome"}
          save={"key"}
          defaultOption={pessoasDropbox[1]}/>


          <ClickableDatePicker 
           value={dataEmprestimo}
           setter={setDataEmprestimo}
           display= "spinner"
           />



            <PMButton BtnWidth={'80%'} BtnHeight={50} text ={"Inserir Emprestimo"} setter ={()=>{
                inserirEmprestimo(navigation, livroId, pessoaId, dataEmprestimo)
            }
            
            }/>
        </View>
     );
   }


    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:20
    },
    title:{
        fontSize:30,
    }
  });
  