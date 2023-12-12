import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";

function inserirEmprestimoView(nav){
    nav.navigate('InserirEmprestimo')
}

function alterarEmprestimoView(nav){
    nav.navigate('AlterarEmprestimo')
}

function buscarEmprestimoView(nav) {
    nav.navigate('BuscarEmprestimo')
}

function excluirEmprestimoView(nav) {
    nav.navigate('ExcluirEmprestimo')
}

function listarEmprestimoView(nav) {
    nav.navigate('ListarEmprestimo')
}



export function EmprestimoMenu({route}) {
    const navigation = useNavigation()

    return (
     <View style={ styles.container }>
        <Text style={ styles.title}>Emprestimo</Text>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Inserir"} setter ={
        ()=>inserirEmprestimoView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Alterar"} setter ={
        ()=>alterarEmprestimoView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Buscar"} setter ={
        ()=>buscarEmprestimoView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Excluir"} setter ={
        ()=>excluirEmprestimoView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Listar"} setter ={
        ()=>listarEmprestimoView(navigation)
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