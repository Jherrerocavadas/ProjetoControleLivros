<div align="center">

![ProjetoControleLivros](README_Files/icon.png)

</div>
<h1 align = "center">ProjetoControleLivros </h1>



# Sobre
Aplicativo Mobile ProjetoControleLivros - Sistema CRUD de controle de livros e empréstimos de livros.

Esse projeto é um aplicativo CRUD de controle de livros e empréstimos dessas unidades. A ideia de criar um aplicativo veio do conceito elaborado pelo meu amigo Vinicius (Perfil do github na aba de referências). Entre suas funções estão:

(Tabela Livros)
- Cadastro de Livros.
- Alteração do cadastro de Livros.
- Busca de Livros.
- Exclusão do cadastro de Livros.
- Listagem de Livros.

(Tabela Pessoas)
- Cadastro de Pessoas.
- Alteração do cadastro de Pessoas.
- Busca de Pessoas.
- Exclusão do cadastro de Pessoas.
- Listagem de Pessoas.
  
(Tabela Emprestimo)
- Cadastro de Emprestimo.
- Alteração do cadastro de Emprestimo.
- Busca de Emprestimo.
- Exclusão do cadastro de Emprestimo.
- Listagem de Emprestimo.

Observação: Nem todos os recursos podem estar implementados e/ou funcionando corretamente. Para verificar quais são as funcionalidades implementadas consulte a guia "[Funcionalidades](#Funcionalidades)", mais abaixo.

# Índice

- [Sobre](#sobre)
- [Índice](#índice)
- [Funcionalidades](#funcionalidades)
    - [Tabela de Livros](#tabela-de-livros)
    - [Tabela de Pessoas](#tabela-de-pessoas)
    - [Tabela de Emprestimo](#tabela-de-emprestimos)
- [Pré Requisitos](#pré-requisitos)
      - [Hardware](#hardware)
      - [Software](#software)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Tecnologias](#tecnologias)
- [Instruções para uso do expo](#instruções-para-uso-do-expo)
      - [Com npm](#com-npm)
      - [Com yarn](#com-yarn)
- [Autor](#autor)
    - [Johann Herrero Cavadas](#johann-herrero-cavadas)
- [Referências](#referências)
    - [Github - Vinicius](#github-vinicius)


# Funcionalidades

(OTIMIZAR COMPONENTES FUTURAMENTE)
### Tabela de Livros
- [x] Cadastro de Livros.
- [x] Alteração do cadastro de Livros.
- [x] Busca de Livros. (Reformulado para a tela de detalhe)
- [x] Exclusão do cadastro de um livro.(Realizado na tela de detalhe agora)
- [x] Listagem de Livros.
- [x] Detalhe do Livro ao clicar na listagem. (Ok)

### Tabela de Pessoas
- [x] Cadastro de Pessoas.
- [x] Alteração do cadastro de Pessoas.
- [x] Busca de Pessoas.(Reformulado para a tela de detalhe)
- [x] Exclusão do cadastro de uma pessoa (Realizado na tela de detalhe agora).
- [x] Listagem de Pessoas.
- [x] Detalhe da Pessoa ao clicar na listagem. (Ok)

### Tabela de Emprestimos
- [x] Cadastro de Emprestimos.
- [x] Alteração do cadastro de Emprestimos.
- [ ] Busca de Emprestimos.(Reformulado para a tela de detalhe)
- [x] Exclusão do cadastro de um empréstimo.(Realizado na tela de detalhe agora)
- [x] Listagem de Emprestimos.
- [x] Detalhe do Emprestimo ao clicar na listagem. (Ok)


# Pré Requisitos

  #### Hardware
  - Um celular com o Expo client instalado (Ou um emulador no computador)

  #### Software
  - Node.js
  - Expo CLI
  - Biblioteca yarn (opcional, para gerenciar as dependências)

# Variáveis de ambiente:
  configurar arquivos .env.development (para desenvolvimento), .env.staging (para homologação) e .env.production (para produção)
  ```
  URL_PORT = xxxx # apenas em desenvolvimento
  BASE_URL = xpto-url:$URL_PORT
  ``` 
# Tecnologias
- [Node.js](https://nodejs.org/pt-br/)
- [React-Native](https://reactnative.dev)
- [Expo](https://expo.dev)

# Instruções para uso do expo

## Com npm
 Para instalar as dependências do projeto,é necessário abrir um terminal na pasta raiz do aplicativo e executar:
  - npm install

  Para iniciar o aplicativo em modo de desenvolvimento (uso no expo), é necessário abrir um terminal na pasta raiz do aplicativo e executar:
  - npm run start (caso seu computador esteja na mesma rede que o seu celular para testes, ou caso você esteja usando algum emulador)
  - npm run local (caso você esteja usando um celular de testes Android conectado via cabo ao computador)
  - npm run localios (caso você esteja usando um celular de testes IOS conectado via cabo ao computador)


  ## Com yarn
  Para instalar as dependências do projeto,é necessário abrir um terminal na pasta raiz do aplicativo e executar:
  - yarn add

  Para iniciar o aplicativo em modo de desenvolvimento (uso no expo), é necessário abrir um terminal na pasta raiz do aplicativo e executar:
  - yarn start (caso seu computador esteja na mesma rede que o seu celular para testes, ou caso você esteja usando algum emulador)
  - yarn local (caso você esteja usando um celular de testes Android conectado via cabo ao computador)
  - yarn localios (caso você esteja usando um celular de testes IOS conectado via cabo ao computador)

  Depois, é necessário escanear o QR code gerado no terminal pelo expo client (opção Scan QR code), inserir a url do servidor do aplicativo manualmente (Enter URL manually), ou, caso tenha realizado o login no Expo CLI (usando o comando expo login e inserindo seu login e senha) e no Expo client, clicar no ícone do servidor aberto (Acima das opções de "Scan QR code" e "Enter URL manually").




# Autor
### Johann Herrero Cavadas
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jherrerocavadas/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jherrerocavadas@gmail.com?Subject=Contato%20github%20-%20Repositório%20ProjetoMobileII)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jherrerocavadas)


# Referências
### Github - Vinicius
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/viniciusVPC)