import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../../Components/Header";
import { PMButton } from "../../Components/PMButton";
import { PMInputCadastro } from "../../Components/PMTextInput";
import { PMTextLink } from "../../Components/PMText";
import { api } from "../../utils/utils"



 export function Cadastro({ route }) {
  const navigation = useNavigation()
  const [usuarioCadastro, setUsuario] = useState("")
  const [senhaCadastro, setSenha] = useState("")
  const [statusCadastro, setStatus] = useState("")
  const [tipoCadastro, setTipo] = useState("")
     return (
      
      <View style={ styles.container }>
        <HeaderLogo/>
        <PMInputCadastro
        setter={ setUsuario }
        valor={ usuarioCadastro }
        placeholderText="Usuário"
        tipoInput="default"
        />

        <PMInputCadastro
          setter={ setSenha }
          valor={ senhaCadastro }
          placeholderText="Senha"
          tipoInput="default"
          isTextoSeguro={ true }
        />

        <PMInputCadastro
          setter={ setStatus }
          valor={ statusCadastro }
          placeholderText="Status"
          tipoInput="default"
        />

        <PMInputCadastro
          setter={ setTipo }
          valor={ tipoCadastro }
          placeholderText="Tipo"
          tipoInput="default"
        />

        <PMButton styleBtn={ "orange" } BtnWidth={'80%'} BtnHeight={50} text ={"Cadastrar"} setter ={()=>{
          api.get(`/usuariosLogin?login=${usuarioCadastro}&senha=${senhaCadastro}` 
          ).then((response)=>
          {
            if(response.data[0]){ // Array tem o objeto de usuário na primeira posição, logo ele já existe
              Alert.alert(
                "Erro!",
                "Usuário já existente!"
              );
            }
            else{ // Array vazio, indicando que o usuário não existe
              api.post(`/usuario` , {
                login: usuarioCadastro,
                senha: senhaCadastro,
                status: statusCadastro,
                tipo: tipoCadastro
            
              }).then((response)=>{// Enviar dados do usuário
                Alert.alert(
                  "Sucesso!",
                  "Cadastro de usuário concluído!"
                )
                navigation.navigate('Login');
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
          
        }/>

        <PMTextLink texto="Já possui uma conta?" link="Clique aqui!" funcLink={()=>{ navigation.navigate('Login') }}/>
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
  