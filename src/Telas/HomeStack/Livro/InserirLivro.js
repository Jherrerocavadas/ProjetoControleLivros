import React, { useState } from "react";
import { Alert, DatePickerIOS, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";


{/*---------- <Componentes personalizados> ----------*/}

import { PMInputCadastro } from "../../../Components/PMTextInput";
import { PMButton } from "../../../Components/PMButton";
import { inserirLivro } from "../../../utils/Livro/livroController";
import ClickableDatePicker from "../../../Components/ClickableDatePicker";




export function InserirLivro({ route }) {
    const navigation = useNavigation()
    const [tituloLivro, setTituloLivro] = useState("")
    const [autorLivro, setAutorLivro] = useState("")
    const [dataCompraLivro, setDataCompraLivro] = useState(new Date())
    const [tipoLivro, setTipoLivro] = useState("Livro") //Pode ser mangá ou HQ também
    

    return (  
      
        <View style={ styles.container }>
            <Text style={ styles.title}>Livro</Text>
            <PMInputCadastro
            setter={ setTituloLivro }
            valor={ tituloLivro }
            placeholderText="Título"
            tipoInput="default"
            />

            <PMInputCadastro
            setter={ setAutorLivro }
            valor={ autorLivro }
            placeholderText="Autor"
            tipoInput="default"
            />

            
           <ClickableDatePicker 
           value={dataCompraLivro}
           setter={setDataCompraLivro}
           display= "spinner"
           />

            <PMButton BtnWidth={'80%'} BtnHeight={50} text ={"Inserir Livro"} setter ={()=>{
                inserirLivro(navigation, tituloLivro, autorLivro, dataCompraLivro.toISOString())
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
  