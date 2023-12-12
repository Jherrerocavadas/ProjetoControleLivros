import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";
import { useState } from "react";
import { PMInputCadastro } from "../../../Components/PMTextInput";
import { buscarPessoa } from "../../../utils/Pessoa/pessoaController";
import { ModalBuscaEntity, ModalText } from "../../../Components/Modais";


export function BuscarPessoa({route}) {
    const navigation = useNavigation()
    const [id, setId] = useState(route.params?`${route.params.id}`:null)
    const [nome, setNome] = useState("Nome")
    const [telefone, setTelefone] = useState("telefone")
    const [isLoading, setIsLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
       
    if(isLoading){
      return(
        <View style={ styles.container }>
           <ActivityIndicator size="large" color="#5000ff"/>
        </View>
      )
    }
  
    if(modalVisible){
      return (
        <ModalBuscaEntity
        labelID="Pessoa: ID"
        id={id}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        >
          <ModalText>Nome: {nome}</ModalText>
          <ModalText>Telefone: {telefone}</ModalText>
        </ModalBuscaEntity>
    );
  }
  else{
    return (
      <View style={ styles.container }>
       <Text style={ styles.title}>Buscar Usuário</Text>
         <Text style={ styles.subtitle}>Insira o ID para buscar:</Text>
 
 
         <PMInputCadastro
             setter={ setId }
             valor={ id }
             placeholderText="ID"
             tipoInput="default"
           />

          <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Buscar"} setter ={
          ()=> {
            setIsLoading(true) // Para aparecer a tela de loading antes de concluir a busca do usuário
            buscarPessoa({id}).then((response)=>{
            //O Erro é tratado no .then pois a promise do app foi concluída mas o erro ocorreu no servidor
              if(response == 1054){
                Alert.alert("Erro!",
                "O ID digitado não é válido!",
                [{
                    text: 'Ok',
                    onPress: () =>{ 
                      setIsLoading(false)},
                    style: 'default',
                  },])
                }
                else{
                  setNome(response.nome) 
                  setTelefone(response.telefone)
                  setModalVisible(!modalVisible)
                  setIsLoading(false)
                }
          
            })
            .catch(()=>{
              //Aqui o erro ocorre no lado do app, ao executar o setNome.
              //No lado do servidor, a requisição é concluída e retorna um array vazio
              Alert.alert("Ops!",
              "O ID digitado não existe!",
              [{
                  text: 'Ok',
                  onPress: () =>{ 
                    setIsLoading(false)},
                  style: 'default',
                },])
            })
          } 
        }/>
         
    </View>
     );
  } 
          
    
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
        marginBottom:30,
    },
    subtitle:{
      fontSize:26,
  },
    dados:{
      fontSize:20,
  }
  });