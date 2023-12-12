import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";
import { useState } from "react";
import { PMInputCadastro } from "../../../Components/PMTextInput";
import { alterarPessoa, buscarPessoa } from "../../../utils/Pessoa/pessoaController";
import { FieldAlterarModal, ModalAlterarEntity, ModalAlterarPessoa } from "../../../Components/Modais";
import RetrieveDataById from "../../../Components/RetrieveDataById";


export function AlterarPessoa({route}) {
    const navigation = useNavigation()
    const [id, setId] = useState(null)
    const [nome, setNome] = useState("nome")
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
    return(
      <ModalAlterarEntity
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      id={id}
      labelID="Pessoa: ID"
      labelActionBtn="Alterar Pessoa"
      action={() => {alterarPessoa({id, nome, telefone}).then((response)=>{
        Alert.alert(response.title,
          response.text)
        navigation.navigate('PessoaView')
      }
      )
      .catch((error)=>
        console.log(error)
      )}}>
        <FieldAlterarModal
        labelModal="Nome"
        setter={setNome}
        valor={nome}
        tipoInput="default"/>

        <FieldAlterarModal
        labelModal="Telefone"
        setter={setTelefone}
        valor={telefone}
        tipoInput="phone-pad"/>


      </ModalAlterarEntity>
    )
  }

      else
      {
        return (
         <RetrieveDataById
         setterId={setId}
         valueId={id}
         searchAction={
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
    );}  
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
  },
  dados:{
    fontSize:20,
  },
  });