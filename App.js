// import React from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


{/*---------- <Telas> ----------*/}
import { Login } from './src/Telas/AuthStack/Login'
import { Cadastro } from './src/Telas/AuthStack/Cadastro'
import { Home } from "./src/Telas/HomeStack/Home";
import { PessoaMenu } from "./src/Telas/HomeStack/Pessoa/PessoaMenu";
import { LivroMenu } from "./src/Telas/HomeStack/Livro/LivroMenu";
import { EmprestimoMenu } from "./src/Telas/HomeStack/Emprestimo/EmprestimoMenu";

import { InserirPessoa } from './src/Telas/HomeStack/Pessoa/InserirPessoa';
import { AlterarPessoa } from './src/Telas/HomeStack/Pessoa/AlterarPessoa';
import { BuscarPessoa } from './src/Telas/HomeStack/Pessoa/BuscarPessoa';
import { ExcluirPessoa } from './src/Telas/HomeStack/Pessoa/ExcluirPessoa';
import { ListarPessoa } from './src/Telas/HomeStack/Pessoa/ListarPessoa';

import { InserirLivro } from './src/Telas/HomeStack/Livro/InserirLivro';
import { AlterarLivro } from './src/Telas/HomeStack/Livro/AlterarLivro';
import { BuscarLivro } from './src/Telas/HomeStack/Livro/BuscarLivro';
import { ExcluirLivro } from './src/Telas/HomeStack/Livro/ExcluirLivro';
import { ListarLivro } from './src/Telas/HomeStack/Livro/ListarLivro';

import { InserirEmprestimo } from './src/Telas/HomeStack/Emprestimo/InserirEmprestimo';
import { AlterarEmprestimo } from './src/Telas/HomeStack/Emprestimo/AlterarEmprestimo';
import { BuscarEmprestimo } from './src/Telas/HomeStack/Emprestimo/BuscarEmprestimo';
import { ExcluirEmprestimo } from './src/Telas/HomeStack/Emprestimo/ExcluirEmprestimo';
import { ListarEmprestimo } from './src/Telas/HomeStack/Emprestimo/ListarEmprestimo';


{/*---------- <Componentes personalizados> ----------*/}

const HomeStack = createNativeStackNavigator();

function AuthStackScreens() {
  return(
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
        <HomeStack.Screen name="Login" component ={Login}/>
        <HomeStack.Screen name="Cadastro" component ={Cadastro}/> 
        <HomeStack.Screen name='Home' component={HomeStackScreen} />
      </HomeStack.Navigator>
  )
}

function HomeStackScreen() {

  return (
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
      <HomeStack.Screen name='Inicial' component={Home} />
      <HomeStack.Screen name="Livros" component ={LivroStackScreen}/>
      <HomeStack.Screen name="Pessoas" component ={PessoaStackScreen}/>
      <HomeStack.Screen name="Emprestimo" component ={EmprestimoStackScreen}/>
    </HomeStack.Navigator>
  );
}

function PessoaStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
      <HomeStack.Screen name="PessoaView" component ={PessoaMenu}/>
      <HomeStack.Screen name='InserirPessoa' component={InserirPessoa} />
      <HomeStack.Screen name="AlterarPessoa" component ={AlterarPessoa}/>
      <HomeStack.Screen name="BuscarPessoa" component ={BuscarPessoa}/>
      <HomeStack.Screen name="ExcluirPessoa" component ={ExcluirPessoa}/>
      <HomeStack.Screen name="ListarPessoa" component ={ListarPessoa}/>
    </HomeStack.Navigator>
  );
}


function LivroStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
      <HomeStack.Screen name="LivroView" component ={LivroMenu}/>
      <HomeStack.Screen name='InserirLivro' component={InserirLivro} />
      <HomeStack.Screen name="AlterarLivro" component ={AlterarLivro}/>
      <HomeStack.Screen name="BuscarLivro" component ={BuscarLivro}/>
      <HomeStack.Screen name="ExcluirLivro" component ={ExcluirLivro}/>
      <HomeStack.Screen name="ListarLivro" component ={ListarLivro}/>
    </HomeStack.Navigator>
  );
}

function EmprestimoStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown:false }}>
      <HomeStack.Screen name="EmprestimoView" component ={EmprestimoMenu}/>
      <HomeStack.Screen name='InserirEmprestimo' component={InserirEmprestimo} />
      <HomeStack.Screen name="AlterarEmprestimo" component ={AlterarEmprestimo}/>
      <HomeStack.Screen name="BuscarEmprestimo" component ={BuscarEmprestimo}/>
      <HomeStack.Screen name="ExcluirEmprestimo" component ={ExcluirEmprestimo}/>
      <HomeStack.Screen name="ListarEmprestimo" component ={ListarEmprestimo}/>
    </HomeStack.Navigator>
  );
}

export default function App() {
  
  return (
    
    <NavigationContainer style={{backgroundColor:'black'}}>
      <AuthStackScreens></AuthStackScreens>
    </NavigationContainer>
  );
}

