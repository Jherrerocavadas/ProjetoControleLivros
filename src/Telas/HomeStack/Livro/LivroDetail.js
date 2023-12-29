
import { StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Alert, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { DetailActionBar } from "../../../Components/DetailActionBar";
import { PMInputCadastro } from "../../../Components/PMTextInput";
import { alterarLivro, buscarLivro, excluirLivro } from "../../../utils/Livro/livroController";
import ClickableDatePicker from "../../../Components/ClickableDatePicker";



{
  /*---------- <Componentes personalizados> ----------*/
}

export function LivroDetail({ route }) {
    const navigation = useNavigation()
    const [id, setId] = useState(route.params?`${route.params.id}`:null)
    const [titulo, setTitulo] = useState("Titulo")
    const [autor, setAutor] = useState("Autor")
    const [dataCompra, setDataCompra] = useState(new Date())
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
 
    
    useEffect(()=>{
      buscarLivro({id}).then((response)=>{
              setTitulo(response.titulo) 
              setAutor(response.autor)
              setDataCompra(response.dataCompra)
              setIsLoading(false)
            })
  
        .catch(()=>{
          Alert.alert("Ops!",
          "Cadastro não encontrado!",
          [{
              text: 'Ok',
              onPress: () =>{ 
                navigation.goBack()
              },
              style: 'default',
            },])
        })  
    },[id])
  
    if (isLoading) {
      return (
        <View style={styles.container}>
          <DetailActionBar
            disabled={true}
          />
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#5000ff" />
          </View>
        </View>
      );
    }
  
    if (isEditing) {
      return (
        <View style={styles.container}>
          <DetailActionBar
              editAction={()=>{
                alterarLivro({id, titulo, autor, dataCompra}).then((response)=>{
                  Alert.alert(response.title,
                    response.text)
                    setIsEditing(false)
                  
                }
                )
                .catch((error)=>
                  console.log(error)
                )
                }}
              deleteAction={()=>{console.log("ss")}}
              disabled={false}
              editing={isEditing}
          />
    
    <Text style={styles.contentTitle}>Livro n° {parseInt(id)}</Text>
          <PMInputCadastro
          setter={ setTitulo }
          valor={ titulo }
          placeholderText="Titulo"
          tipoInput="default"
          />
             <PMInputCadastro
          setter={ setAutor }
          valor={ autor }
          placeholderText="Autor"
          tipoInput="default"
          />

          <ClickableDatePicker 
           value={dataCompra}
           setter={setDataCompra}
           display= "spinner"
           />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <DetailActionBar
            editAction={()=>{setIsEditing(true)}}
            deleteAction={()=>{
              excluirLivro({id}).then((response)=>{
                Alert.alert(response.title,
                  response.text)
                navigation.goBack()
              }
              )
              .catch((error)=>
                console.log(error)
              )
  
            }}
            disabled={false}
            editing={isEditing}
        />
  
      <Text style={styles.contentTitle}>Livro n° {parseInt(id)}</Text>
      <Text style={styles.contentText}>Titulo: {titulo}</Text>
      <Text style={styles.contentText}>Escrito por: {autor}</Text>
      <Text style={styles.contentText}>Data da compra: {dataCompra.toLocaleDateString()}</Text>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      // width:"100%",
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      marginTop: "9%",
      // justifyContent: 'center',
      // paddingHorizontal:20,
      // marginVertical:'60%',
      // borderRadius: 20,
      // padding: 10,
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 2,
      // },
      // shadowOpacity: 0.25,
      // shadowRadius: 4,
      // elevation: 5,
    },
    loadingContainer:{
      flex: 1,
      justifyContent:"center",
      paddingBottom:"25%"
    },
    
  
    contentText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 20,
    },
    contentTitle: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
    },
    modalViewInput: {
      flexDirection: "row",
    },
  });
  