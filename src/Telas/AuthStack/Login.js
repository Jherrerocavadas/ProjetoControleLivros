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
            api.get(`/check-pessoa-service`).then(()=>

             { 
              let params;
              
              if(usuarioLogin == "")
             {
              console.log(usuarioLogin)
              params = undefined}
             else{
              console.log(usuarioLogin)
              params = {username: usuarioLogin}
             }
              navigation.navigate("Home", {
                screen: 'Inicial',
                params: params,
              } )}
             
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
  