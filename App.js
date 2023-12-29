// import React from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, Octicons} from 'react-native-vector-icons';


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
import { PessoaDetail } from './src/Telas/HomeStack/Pessoa/PessoaDetail'

import { InserirLivro } from './src/Telas/HomeStack/Livro/InserirLivro';
import { AlterarLivro } from './src/Telas/HomeStack/Livro/AlterarLivro';
import { BuscarLivro } from './src/Telas/HomeStack/Livro/BuscarLivro';
import { ExcluirLivro } from './src/Telas/HomeStack/Livro/ExcluirLivro';
import { ListarLivro } from './src/Telas/HomeStack/Livro/ListarLivro';
import { LivroDetail } from './src/Telas/HomeStack/Livro/LivroDetail'

import { InserirEmprestimo } from './src/Telas/HomeStack/Emprestimo/InserirEmprestimo';
import { AlterarEmprestimo } from './src/Telas/HomeStack/Emprestimo/AlterarEmprestimo';
import { BuscarEmprestimo } from './src/Telas/HomeStack/Emprestimo/BuscarEmprestimo';
import { ExcluirEmprestimo } from './src/Telas/HomeStack/Emprestimo/ExcluirEmprestimo';
import { ListarEmprestimo } from './src/Telas/HomeStack/Emprestimo/ListarEmprestimo';
import { EmprestimoDetail } from './src/Telas/HomeStack/Emprestimo/EmprestimoDetail';



{/*---------- <Componentes personalizados> ----------*/}

const HomeStack = createNativeStackNavigator();
const MenuTab = createBottomTabNavigator();

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
      <HomeStack.Screen name='Inicial' component={MenusTabScreen} />
      <HomeStack.Screen name='InserirLivro' component={InserirLivro} />
      <HomeStack.Screen name='InserirPessoa' component={InserirPessoa} />
      <HomeStack.Screen name='InserirEmprestimo' component={InserirEmprestimo} />
      <HomeStack.Screen name="LivroDetail" component ={LivroDetail}/>
      <HomeStack.Screen name="PessoaDetail" component ={PessoaDetail}/>
      <HomeStack.Screen name="EmprestimoDetail" component ={EmprestimoDetail}/>
    </HomeStack.Navigator>
  );
}


function MenusTabScreen() {
  return (
    <MenuTab.Navigator screenOptions={{headerShown:false}}>
      <MenuTab.Screen name="Home" component={Home} options={{tabBarIcon: ()=>{return <Octicons name={'home'} size={25} color={"gray"} />}}} />
      <MenuTab.Screen name="Pessoas" component ={ListarPessoa}options={{tabBarIcon: ()=>{return <Octicons name={'person'} size={25} color={"gray"} />}}}/>
      <MenuTab.Screen name="Livros" component ={ListarLivro}options={{tabBarIcon: ()=>{return <Octicons name={'repo'} size={25} color={"gray"} />}}}/>
      <MenuTab.Screen name="Emprestimos" component ={ListarEmprestimo}options={{tabBarIcon: ()=>{return <Octicons name={'repo-push'} size={25} color={"gray"} />}}}/>
    </MenuTab.Navigator>
  );
}

export default function App() {
  
  return (
    
    <NavigationContainer style={{backgroundColor:'black'}}>
      <AuthStackScreens></AuthStackScreens>
    </NavigationContainer>
  );
}

