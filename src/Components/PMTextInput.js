import React from "react";
import {View, TextInput } from 'react-native';
import { PMText } from "./PMText";


export function PMInputCadastro(
    {valor, setter, placeholderText = "", tipoInput, maxInput, icone, posIcone, isTextoSeguro=false, isEditavel=true}
  ) {
    const input = {
      height:30,
      width:350,
      margin: 15,
      fontSize: 20,
      fontWeight: "bold",
      color:"gray",
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      alignItems: "center",
      justifyContent: "center",
  };

    const error = {
      height:30,
      width:350,
      margin: 15,
      fontSize: 20,
      color:"red",
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      alignItems: "center",
      justifyContent: "center",
  };

  return (

    <TextInput
      style={input}
      onChangeText={setter}
      value={valor}
      error = {error}
      textColor = "gray"
      activeUnderlineColor= "red"
      placeholder= {placeholderText}
      keyboardType={tipoInput}
      maxLength= {maxInput}

      secureTextEntry = {isTextoSeguro}
      editable = {isEditavel}
      //Colocar as máscaras de input
      //Colocar esquema para alternar a máscara de senha
    />
  );
}

export function PMInputModal(
  {style, valor, setter, placeholderText = "", tipoInput, maxInput, isTextoSeguro=false}
) {

  const error = {
    height:30,
    width:350,
    margin: 15,
    fontSize: 20,
    color:"red",
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
};

return (

  <TextInput
    style={{...style}}
    onChangeText={setter}
    value={valor}
    error = {error}
    textColor = "gray"
    activeUnderlineColor= "red"
    placeholder= {placeholderText}
    keyboardType={tipoInput}
    maxLength= {maxInput}

    secureTextEntry = {isTextoSeguro}
    //Colocar as máscaras de input
    //Colocar esquema para alternar a máscara de senha
  />
);
}