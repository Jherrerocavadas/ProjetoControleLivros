import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";
import { useState, useEffect } from "react";
import { PMInputCadastro, PMInputModal } from "../../../Components/PMTextInput";
import { alterarLivro, buscarLivro } from "../../../utils/Livro/livroController";
import { DateFieldModal, FieldAlterarModal, ModalAlterarLivro } from "../../../Components/Modais";
import { ClickableDatePicker } from "../../../Components/ClickableDatePicker";
import RetrieveDataById from "../../../Components/RetrieveDataById";


export function AlterarLivro({route}) {
    const navigation = useNavigation()
    const [id, setId] = useState(null)
    const [titulo, setTitulo] = useState("titulo")
    const [autor, setAutor] = useState("autor")
    const [dataCompra, setDataCompra] = useState("Data")
    const [isLoading, setIsLoading] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    // useEffect(() => {
    //   buscarLivro()
    //     .then((response) => {
    //       console.log("livros: " + response);
    //       setTitulo(response.titulo);
    //       setAutor(response.autor);
    //       setDataCompra(response.dataCompra);
    //     })
    //     .catch((error) => {
    //       console.log("Erro: " + error);
    //     });
    // }, []);
       
    if(isLoading){
      return(
        <View style={ styles.container }>
           <ActivityIndicator size="large" color="#5000ff"/>
        </View>
      )
    }
  
    if(modalVisible){
      return (
        <ModalAlterarLivro
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={id}
        labelID="Livro: ID"
        labelActionBtn="Alterar Livro"
        action={() => {alterarLivro({id, titulo, autor}).then((response)=>{
          Alert.alert(response.title,
            response.text)
          navigation.navigate('LivroView')
        }
        )
        .catch((error)=>
          console.log(error)
        )}}>


        <FieldAlterarModal
        labelModal="Titulo"
        setter={setTitulo}
        valor={titulo}
        tipoInput="default"/>

        <FieldAlterarModal
        labelModal="Autor"
        setter={setAutor}
        valor={autor}
        tipoInput="default"/>

        <DateFieldModal
        labelModal="Data da compra"
        setter={setDataCompra}
        valor={dataCompra}/>
      
      </ModalAlterarLivro>
    );
  }

      else
      {
        return (
         <RetrieveDataById
         setterId={setId}
         valueId={id}
         searchAction={()=> {
          setIsLoading(true) // Para aparecer a tela de loading antes de concluir a busca do usuário
          console.log(id)
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
              console.log(response)
              console.log(response.titulo)
              setTitulo(response.titulo) 
              setAutor(response.autor)
              setDataCompra(response.dataCompra)
              setModalVisible(!modalVisible)
              // setIsLoading(false)
              console.log(titulo)
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
          } }/>
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
  }
  });