import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


{/*---------- <Componentes personalizados> ----------*/}

import { PMInputCadastro } from "../../../Components/PMTextInput";
import { PMButton } from "../../../Components/PMButton";
import { inserirEmprestimo } from "../../../utils/Emprestimo/emprestimoController";


export function InserirEmprestimo({ route }) {
    const navigation = useNavigation()
    const [nomeEmprestimo, setNomeEmprestimo] = useState("")
    const [telefoneEmprestimo, setTelefoneEmprestimo] = useState("")
    return (  
        <View style={ styles.container }>
            <Text style={ styles.title}>Emprestimo</Text>
            <PMInputCadastro
            setter={ setNomeEmprestimo }
            valor={ nomeEmprestimo }
            placeholderText="Nome"
            tipoInput="default"
            />

            <PMInputCadastro
            setter={ setTelefoneEmprestimo }
            valor={ telefoneEmprestimo }
            placeholderText="Telefone"
            tipoInput="phone-pad"
            isTextoSeguro={ true }
            />


            <PMButton BtnWidth={'80%'} BtnHeight={50} text ={"Inserir Emprestimo"} setter ={()=>{
                inserirEmprestimo(navigation, nomeEmprestimo, telefoneEmprestimo)
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
  