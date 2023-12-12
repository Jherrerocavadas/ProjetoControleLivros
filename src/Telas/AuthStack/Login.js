import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../../Components/Header";
import { PMButton } from "../../Components/PMButton";
import { PMInputCadastro } from "../../Components/PMTextInput";
import { PMTextLink } from "../../Components/PMText";
import { api } from "../../utils/utils"

 export function Login({ route }) {
  const navigation = useNavigation()
  const [usuarioLogin, setUsuario] = useState("")
  const [senhaLogin, setSenha] = useState("")
     return (
      <View style={ styles.container }>
      <HeaderLogo/>
      <PMInputCadastro
      setter={ setUsuario }
      valor={ usuarioLogin }
      placeholderText="Usuário"
      tipoInput="default"
      />

      <PMInputCadastro
        setter={ setSenha }
        valor={ senhaLogin }
        placeholderText="Senha"
        tipoInput="default"
        isTextoSeguro={ true }
      />

      <PMButton BtnWidth={'80%'} BtnHeight={50} text ={"Login"} setter ={()=>
          {
            api.get(`/pessoas/check-pessoa-service`
             
            ).then(
            
              // if(response.data[0]){ // Array tem o objeto de usuário na primeira posição
                navigation.navigate("Home")
              // }
              // else{ // Array vazio, indicando que o usuário não foi encontrado
                // Alert.alert(
                  // "Erro de Login",
                  // "Usuário ou senha inválidos!"
                // );
              // }
                
            )
            .catch((error)=>{
              console.log(error)
            })           
          }
        } />

      <PMTextLink texto="Não tem uma conta?" link="Clique aqui!" funcLink={()=>{ navigation.navigate('Cadastro') }}/>
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
  });
  