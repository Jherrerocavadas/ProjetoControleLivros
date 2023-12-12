import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";
import { useState } from "react";
import { PMInputCadastro } from "../../../Components/PMTextInput";
import { buscarLivro } from "../../../utils/Livro/livroController";
import { ModalBuscaEntity, ModalText } from "../../../Components/Modais";


export function BuscarLivro({route}) {
    const navigation = useNavigation()
    const [id, setId] = useState(route.params?`${route.params.id}`:null)
    const [titulo, setTitulo] = useState("Titulo")
    const [autor, setAutor] = useState("Autor")
    const [dataCompra, setDataCompra] = useState("Data")
    const [isLoading, setIsLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    console.warn(dataCompra)
    console.warn(new Date(dataCompra+"T03:00:000Z").toLocaleDateString())

       
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
        labelID="Livro: ID"
        id={id}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        >
          <ModalText>Título: {titulo}</ModalText>
          <ModalText>Autor: {autor}</ModalText>
          <ModalText>Data da Compra: {new Date(dataCompra+"T03:00:000Z").toLocaleDateString()}</ModalText>
        </ModalBuscaEntity>
    );
  }
  else{
    return (
      <View style={ styles.container }>
       <Text style={ styles.title}>Buscar Livro</Text>
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
            buscarLivro({id}).then((response)=>{
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
                  setTitulo(response.titulo) 
                  setAutor(response.autor)
                  setDataCompra(response.dataCompra)
                  setModalVisible(!modalVisible)
                  setIsLoading(false)
                }
          
            })
            .catch(()=>{
              //Aqui o erro ocorre no lado do app, ao executar o setTitulo.
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