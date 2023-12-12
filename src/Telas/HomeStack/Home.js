import React, { useContext, useState, useEffect, isValidElement } from "react";
import { Alert, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

{
  /*---------- <Componentes personalizados> ----------*/
}
import HeaderLogo from "../../Components/Header";
import { PMButton } from "../../Components/PMButton";
import { PMInputCadastro } from "../../Components/PMTextInput";
import { PMText, PMTextLink } from "../../Components/PMText";
import { contagemEmprestimos } from "../../utils/Emprestimo/emprestimoController";
import { contagemLivros } from "../../utils/Livro/livroController";
import { EntityCounter } from "../../Components/EntityCounter";

function pessoasView(nav) {
  nav.navigate("Pessoas");
}

function emprestimosView(nav) {
  nav.navigate("Emprestimos");
}

function livrosView(nav) {
  nav.navigate("Livros");
}

async function loadCountLivro() {
  try {
  const response = await contagemLivros()
  const livrosResponse = {
        countLivro: response,
        isLoading: false,
      };
      return livrosResponse

    
  } catch (error) {
    console.warn(error);
  }

}

async function loadCountEmprestimo() {
  const response = await contagemEmprestimos()
  const emprestimoResponse = {
    countEmprestimo: response,
    isLoading: false,
  };
  return emprestimoResponse
}

export function Home({ route }) {
  const navigation = useNavigation();
  const user = "Johann";
  const [countLivros, setCountLivros] = useState(0);
  const [countEmprestimos, setCountEmprestimos] = useState(0);
  const [isLoadingLivro, setIsLoadingLivro] = useState(true);
  const [isLoadingEmprestimo, setIsLoadingEmprestimo] = useState(true);

   useEffect(() => {
    loadCountEmprestimo()
      .then((response) => {
        console.log("EmprestimoResponse: " + response);
        setCountEmprestimos(response.countEmprestimo);
        setIsLoadingEmprestimo(response.isLoading);
      })
      .catch((error) => {
        console.log("Erro: " + error);
      });
  }, [loadCountEmprestimo().then((response)=>{return response})]);


  useEffect(()=>{
    loadCountLivro().then((response)=>
        {
          console.log("LivroResponse: "+ response.countLivro)
          setCountLivros(response.countLivro)
          setIsLoadingLivro(response.isLoading)

        }).catch((error)=>{
          console.log("ErroLivro: " + error)
        })
  },[loadCountLivro().then((response)=>{return response})])

  return (
    <View style={styles.container}>
      {/* <HeaderLogo/> */}
      <PMText size={25}>Olá, {user}!</PMText>
      <PMText>{/* espaço */}</PMText>
      <View style={styles.counters}>
      <EntityCounter
        label={"Livros\nCadastrados"}
        counterValue={countLivros}
        isLoading={isLoadingLivro}
      ></EntityCounter>
      <EntityCounter
        label={"Empréstimos\nVigentes"}
        counterValue={countEmprestimos}
        isLoading={isLoadingEmprestimo}
      ></EntityCounter>
      </View>

      <PMText>{/* espaço */}</PMText>
      <PMText size={23}>O que você quer acessar hoje?</PMText>
      <PMText>{/* espaço */}</PMText>
      <PMButton
        styleBtn="list"
        BtnWidth={"80%"}
        BtnHeight={50}
        text={"Livros"}
        setter={() => livrosView(navigation)}
      />
      <PMButton
        styleBtn="list"
        BtnWidth={"80%"}
        BtnHeight={50}
        text={"Pessoas"}
        setter={() => pessoasView(navigation)}
      />
      <PMButton
        styleBtn="list"
        BtnWidth={"80%"}
        BtnHeight={50}
        text={"Empréstimos"}
        setter={() => emprestimosView(navigation)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  counters: {
    
      flexDirection: "row",
      marginHorizontal:0,
  },

});
