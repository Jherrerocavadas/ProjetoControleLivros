import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DetailActionBar } from "../../../Components/DetailActionBar";
import { useEffect, useState } from "react";
import { PMInputCadastro } from "../../../Components/PMTextInput";
import { alterarPessoa, buscarPessoa, excluirPessoa } from "../../../utils/Pessoa/pessoaController";


{
  /*---------- <Componentes personalizados> ----------*/
}

export function PessoaDetail({ route }) {
  const navigation = useNavigation();
  const [id, setId] = useState(route.params ? `${route.params.id}` : null);
  const [nome, setNome] = useState("Nome");
  const [telefone, setTelefone] = useState("Telefone");
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(()=>{
    buscarPessoa({id}).then((response)=>{
            setNome(response.nome) 
            setTelefone(response.telefone)
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
  },[])

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
              alterarPessoa({id, nome, telefone}).then((response)=>{
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
  
        <Text style={styles.contentTitle}>Pessoa Cadastro n° {parseInt(id)}</Text>
        <PMInputCadastro
        setter={ setNome }
        valor={ nome }
        placeholderText="Nome"
        tipoInput="default"
        />
           <PMInputCadastro
        setter={ setTelefone }
        valor={ telefone }
        placeholderText="Telefone"
        tipoInput="phone-pad"
        />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <DetailActionBar
          editAction={()=>{setIsEditing(true)}}
          deleteAction={()=>{
            excluirPessoa({id}).then((response)=>{
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

      <Text style={styles.contentTitle}>Pessoa Cadastro n° {parseInt(id)}</Text>
      
      <Text style={styles.contentText}>Nome: {nome}</Text>
        <Text style={styles.contentText}>Telefone: {telefone}</Text>

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
