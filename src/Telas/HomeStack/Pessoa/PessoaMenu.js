import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";

function inserirPessoaView(nav){
    nav.navigate('InserirPessoa')
}

function alterarPessoaView(nav){
    nav.navigate('AlterarPessoa')
}

function buscarPessoaView(nav) {
    nav.navigate('BuscarPessoa')
}

function excluirPessoaView(nav) {
    nav.navigate('ExcluirPessoa')
}

function listarPessoaView(nav) {
    nav.navigate('ListarPessoa')
}



export function PessoaMenu({route}) {
    const navigation = useNavigation()

    return (
     <View style={ styles.container }>
        <Text style={ styles.title}>Pessoa</Text>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Inserir"} setter ={
        ()=>inserirPessoaView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Alterar"} setter ={
        ()=>alterarPessoaView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Buscar"} setter ={
        ()=>buscarPessoaView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Excluir"} setter ={
        ()=>excluirPessoaView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Listar"} setter ={
        ()=>listarPessoaView(navigation)
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