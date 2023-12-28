
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { DetailActionBar } from "../../../Components/DetailActionBar";
import { PMInputCadastro, SearchDropDown } from "../../../Components/PMTextInput";
import { alterarLivro, buscarLivro, excluirLivro, listarLivro } from "../../../utils/Livro/livroController";
import { buscarPessoa, listarPessoa } from "../../../utils/Pessoa/pessoaController";
import ClickableDatePicker from "../../../Components/ClickableDatePicker";
import { alterarEmprestimo, buscarEmprestimo, excluirEmprestimo } from "../../../utils/Emprestimo/emprestimoController";



{
  /*---------- <Componentes personalizados> ----------*/
}

async function getLivros() {
  try {
    const response = await listarLivro()
    return response.map((item) => {
      return { key: item.livroId, value: item.titulo }
    })

  } catch (error) {
    console.warn(error);
  }
}

async function getPessoas() {
  try {
    const response = await listarPessoa()
    return response.map((item) => {
      return { key: item.pessoaId, value: item.nome }
    })
  } catch (error) {
    console.warn(error);
  }
}

async function getDadosEmprestimo(id) {
  try {
    const { emprestimoId, livroId, pessoaId, dataEmprestimo } = await buscarEmprestimo({ id })
    // let isLivroUndefined = false
    // let isPessoaUndefined = false

    const livroResponse = await buscarLivro({ id: livroId })
    // if (livroResponse === undefined) {
    //   livroResponse = {
    //     "autor": "indefinido",
    //     "dataCompra": new Date(),
    //     "livroId": null,
    //     "titulo": "indefinido"
    //   }
    //   isLivroUndefined = true
    // }
    const pessoaResponse = await buscarPessoa({ id: pessoaId })
    // if (pessoaResponse === undefined) {
    //   pessoaResponse = {
    //     "nome": "indefinido",
    //     "pessoaId": null,
    //     "telefone": "00000000000" }
    //     isPessoaUndefined = true
    // }
    return {
      id: emprestimoId,
      livro: livroResponse,
      pessoa: pessoaResponse,
      dataEmprestimo: dataEmprestimo,
      // isLivroUndefined,
      // isPessoaUndefined
    }

  } catch (error) {
    console.info(error);
  }
}

export function EmprestimoDetail({ route }) {
  const navigation = useNavigation()
  const [id, setId] = useState(route.params ? `${route.params.id}` : null)
  const [dataEmprestimo, setDataEmprestimo] = useState(new Date())
  // Detalhes do livro
  const [livroId, setLivroId] = useState(null)
  const [titulo, setTitulo] = useState("Titulo")
  const [autor, setAutor] = useState("Autor")
  const [dataCompra, setDataCompra] = useState(new Date())
  const [livrosDropbox, setLivrosDropbox] = useState([]);

  // Detalhes da pessoa
  const [pessoaId, setPessoaId] = useState(null)
  const [nome, setNome] = useState("Nome");
  const [telefone, setTelefone] = useState("Telefone");
  const [pessoasDropbox, setPessoasDropbox] = useState([]);



  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);



  useEffect(() => {
    getLivros()
    .then((livros) => {
      setLivrosDropbox(livros)
    })
    .catch((error) => {
      console.log(error)
    })
  }

    , [])

  useEffect(() => {
    getPessoas()
    .then((pessoas) => {
      setPessoasDropbox(pessoas)
    })
    .catch((error) => {
      console.log(error)
    })
  }
    , [])

  useEffect(() => {
    getDadosEmprestimo(id).then((response) => {
      console.log(response)
      setLivroId(response.livro.livroId)
      setAutor(response.livro.autor)
      setDataCompra(response.livro.dataCompra)
      setTitulo(response.livro.titulo)

      setPessoaId(response.pessoa.pessoaId)
      setNome(response.pessoa.nome)
      setTelefone(response.pessoa.telefone)

      setDataEmprestimo(response.dataEmprestimo)

      setIsLoading(false)
    })

      .catch(() => {
        Alert.alert("Ops!",
          "Cadastro não encontrado!",
          [{
            text: 'Ok',
            onPress: () => {
              navigation.goBack()
            },
            style: 'default',
          },])
      })
  }, [id])

  useEffect(() => {
    buscarLivro({ id: livroId }).then((response) => {
      setTitulo(response.titulo)
      setAutor(response.autor)
      setDataCompra(response.dataCompra)
    })

      .catch((error) => {
        console.log(error)
      })
  }, [livroId])


  useEffect(() => {
    buscarPessoa({ id: pessoaId }).then((response) => {
      setNome(response.nome)
      setTelefone(response.telefone)

    })

      .catch((error) => {
        console.log(error)
      })
  }, [pessoaId])


  if (isLoading) {
    console.log("Loading")
    return (
      <View style={styles.container}>
        <DetailActionBar
          disabled={true}
        />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#5000ff" />
        </View>
      </View>
    );
  }

  if (isEditing) {
    console.log("Editando")
    // console.log(data)
    return (
      <View style={styles.container}>
        <DetailActionBar
          editAction={() => {
            alterarEmprestimo({ id, livroId, pessoaId, dataEmprestimo }).then((response) => {
              Alert.alert(response.title,
                response.text)
              setIsEditing(false)

            }
            )
              .catch((error) =>
                console.log(error)
              )
          }}
          deleteAction={() => { console.log("ss") }}
          disabled={false}
          editing={isEditing}
        />

        <Text style={styles.contentTitle}>Empréstimo n° {parseInt(id)}</Text>

        <SearchDropDown
          data={livrosDropbox}
          setSelected={(val) => {
            setLivroId(val)
            console.log(`O livro selecionado é: ${livroId}`)
            console.log(livroId)
          }}
          fieldPlaceHolder={"Selecione um livro"}
          searchPlaceholder={"Procurar por título"}
          save={"key"} />


        <Text style={styles.contentTitle}>Dados do livro n° {parseInt(livroId)}</Text>
        <Text style={styles.contentText}>Titulo: {titulo}</Text>
        <Text style={styles.contentText}>Escrito por: {autor}</Text>
        <Text style={styles.contentText}>Data da compra: {dataCompra.toLocaleDateString()}</Text>



        <SearchDropDown
          data={pessoasDropbox}
          setSelected={(val) => {
            setPessoaId(val)
            console.log(`A pessoa selecionada é: ${pessoaId}`)
            console.log(pessoaId)
          }}
          fieldPlaceHolder={"Selecione uma pessoa"}
          searchPlaceholder={"Procurar por nome"}
          save={"key"} />


        <Text style={styles.contentTitle}>Dados da pessoa n° {parseInt(pessoaId)}</Text>
        <Text style={styles.contentText}>Nome: {nome}</Text>
        <Text style={styles.contentText}>Telefone: {telefone}</Text>

        <ClickableDatePicker
          value={dataEmprestimo}
          setter={setDataEmprestimo}
          display="spinner"
        />
      </View>
    );
  }


  console.log("Default")
  return (
    <View style={styles.container}>
      <DetailActionBar
        editAction={() => { setIsEditing(true) }}
        deleteAction={() => {
          excluirEmprestimo({id}).then((response) => {
            Alert.alert(response.title,
              response.text)
            navigation.goBack()
          }
          )
            .catch((error) =>
              console.log(error)
            )

        }}
        disabled={false}
        editing={isEditing}
      />

      <Text style={styles.contentTitle}>Empréstimo n° {parseInt(id)}</Text>
      <Text style={styles.contentText}>Data do empréstimo: {dataEmprestimo.toLocaleDateString()}</Text>
      <Text>{/* Espaçamento*/}</Text>
      <Text style={styles.contentTitle}>Dados do livro n° {parseInt(livroId)}</Text>
      <Text style={styles.contentText}>Titulo: {titulo}</Text>
      <Text style={styles.contentText}>Escrito por: {autor}</Text>
      <Text style={styles.contentText}>Data da compra: {dataCompra.toLocaleDateString()}</Text>
      <Text>{/* Espaçamento*/}</Text>
      <Text style={styles.contentTitle}>Dados da pessoa n° {parseInt(pessoaId)}</Text>
      <Text style={styles.contentText}>Nome: {nome}</Text>
      <Text style={styles.contentText}>Telefone: {telefone}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width:"100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "9%",
    // justifyContent: 'center',
    // paddingHorizontal:20,
    // marginVertical:'60%',
    // borderRadius: 20,
    // padding: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: "25%"
  },


  contentText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  contentTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  modalViewInput: {
    flexDirection: "row",
  },
});
