import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { PMButton } from "../../../Components/PMButton";

function inserirLivroView(nav){
    nav.navigate('InserirLivro')
}

function alterarLivroView(nav){
    nav.navigate('AlterarLivro')
}

function buscarLivroView(nav) {
    nav.navigate('BuscarLivro')
}

function excluirLivroView(nav) {
    nav.navigate('ExcluirLivro')
}

function listarLivroView(nav) {
    nav.navigate('ListarLivro')
}



export function LivroMenu({route}) {
    const navigation = useNavigation()

    return (
     <View style={ styles.container }>
        <Text style={ styles.title}>Livro</Text>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Inserir"} setter ={
        ()=>inserirLivroView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Alterar"} setter ={
        ()=>alterarLivroView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Buscar"} setter ={
        ()=>buscarLivroView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Excluir"} setter ={
        ()=>excluirLivroView(navigation)
        }/>
        <PMButton styleBtn = 'list' BtnWidth={'80%'} BtnHeight={50} text ={"Listar"} setter ={
        ()=>listarLivroView(navigation)
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