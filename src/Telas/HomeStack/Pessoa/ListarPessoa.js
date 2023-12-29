import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { PMButton } from "../../../Components/PMButton";

import { listarPessoa } from "../../../utils/Pessoa/pessoaController";
import { useEffect , useState } from "react";
import { ActivityIndicator } from "react-native";
import { Grid } from "../../../Components/Grids";


export function ListarPessoa({route}) {
    const navigation = useNavigation()
    const [pessoas, setPessoas] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const colunas = ["ID", "Nome", "Telefone"]
    // const [ colunas, setColunas ] = useState([ // Nome das Colunas
    //   "ID",
    //   "Nome",
    //   "Telefone",
    //   "Status",
    //   "Tipo"
    // ])
    const tamanhosTabela = ["14%","43%","43%"]
    const tableHeader = () => ( // Construtor do Cabeçalho das colunas
      <View style={styles.tableHeader}>
        {
          colunas.map((column, index) => {
            {
              return (
                <View 
                  key={index}
                  style={{...styles.columnHeader, width:tamanhosTabela[index]}} 
                  >
                  <Text style={styles.columnHeaderTxt}>{column}</Text>
                </View>
              )
            }
          })
        }
      </View>
    )


  useFocusEffect(()=>{
      listarPessoa().then((response)=>
          { setPessoas(response)
             
            setIsLoading(false)
           
          })  
    })
    
    if(isLoading){
      return(
        <View style={ styles.container }>
           <ActivityIndicator size="large" color="#5000ff"/>
        </View>
      )
    }
    

    
    return (
      <Grid
      elementos={pessoas}
      colunas={colunas}
      tamanhosTabela={tamanhosTabela}
      telaDetalhe={"PessoaDetail"}
      telaInsert={"InserirPessoa"}
      textoInsert={"Inserir Pessoa"}
      />

     


  //    <View style={ styles.container }>
  //       <FlatList
  //           style={{width:"90%"}}
  //           ListHeaderComponent={tableHeader}
  //           stickyHeaderIndices={[0]}
  //           decelerationRate={'fast'}
  //           data={pessoas}
  //           keyExtractor={(item, index) => index+""}
  //           renderItem={({item, index})=> 
  //              (
  //               <View style={{...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white"}}>
  //                 <Text style={{...styles.colunaID, fontWeight:"bold"}}>{item.id}</Text>
  //                 <Text style={styles.colunaNome}>{item.nome}</Text>
  //                 <Text style={styles.colunaTelefone}>{item.telefone}</Text>
  //                 <Text style={styles.colunaStatus}>{item.status}</Text>
  //                 <Text style={styles.colunaTipo}>{item.tipo}</Text>
  //               </View>
  //             )}
  //           />
  //  </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:70
    },
    title:{
        fontSize:30,
    },

    tableHeader: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#5000ff",
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
      height: 50
    },
    tableRow: {
      flexDirection: "row",
      height: 40,
      alignItems:"center",
    },

    columnHeader: {
      width: "20%",
      justifyContent: "center",
      alignItems:"center"
    },
    columnHeaderTxt: {
      color: "white",
      fontWeight: "bold",
    },
    colunaID: {
      width:"8%",
      textAlign:"center",
    },
    colunaNome: {
      width:"30%",
      textAlign:"center",
    },
    colunaTelefone: {
      width:"27%",
      textAlign:"center",
    },
    colunaStatus: {
      width:"15%",
      textAlign:"center",
    },
    colunaTipo: {
      width:"20%",
      textAlign:"center",
    }
  });








