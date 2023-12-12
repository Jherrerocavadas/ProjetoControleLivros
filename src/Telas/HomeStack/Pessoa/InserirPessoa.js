import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


{/*---------- <Componentes personalizados> ----------*/}

import { PMInputCadastro } from "../../../Components/PMTextInput";
import { PMButton } from "../../../Components/PMButton";
import { inserirPessoa } from "../../../utils/Pessoa/pessoaController";


export function InserirPessoa({ route }) {
    const navigation = useNavigation()
    const [nomePessoa, setNomePessoa] = useState("")
    const [telefonePessoa, setTelefonePessoa] = useState("")
    return (  
        <View style={ styles.container }>
            <Text style={ styles.title}>Pessoa</Text>
            <PMInputCadastro
            setter={ setNomePessoa }
            valor={ nomePessoa }
            placeholderText="Nome"
            tipoInput="default"
            />

            <PMInputCadastro
            setter={ setTelefonePessoa }
            valor={ telefonePessoa }
            placeholderText="Telefone"
            tipoInput="phone-pad"
            isTextoSeguro={ true }
            />


            <PMButton BtnWidth={'80%'} BtnHeight={50} text ={"Inserir Pessoa"} setter ={()=>{
                inserirPessoa(navigation, nomePessoa, telefonePessoa)
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
  