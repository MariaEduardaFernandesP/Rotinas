import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";

import Header from "./componentes/Header";

import Card from "./componentes/Card";

export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>

      <Card
        porcentagem="5%"
        titulo="Higiene Pessoal"
        imagem="https://image.slidesharecdn.com/higienepessoal-141120172417-conversion-gate02/85/higiene-pessoal-1-320.jpg?cb=1666147191"
        descricao="Tomar banho, Escovar os dentes etc"
      ></Card>

      <Card
        porcentagem="10%"
        titulo="Arrumar a Casa"
        imagem="https://www.decorfacil.com/wp-content/uploads/2021/04/20210413lavar-a-louca-mais-rapido-2.jpg"
        descricao="Lavar Louça, Varrer a Casa , Passar Pano etc"
      ></Card>

      <Card
        porcentagem="20%"
        titulo="Estudar para o Enem"
        imagem="https://www.estudaqui.com/wp-content/uploads/2020/05/como-estudar-enem-sozinho.png"
        descricao="Estudar as Matérias que caem no Enem"
      ></Card>

      <Card
        porcentagem="10%"
        titulo="Realizar as atividades da Etec"
        imagem="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2017/08/istock-527665536.jpg?quality=100&strip=info&w=720&h=440&crop=1"
        descricao="Realizar as Atividades"
      ></Card>

      <Card
        porcentagem="15%"
        titulo="Se Arrumar para ir a Etec"
        imagem="https://i.pinimg.com/originals/ef/1f/ce/ef1fce501ee7135a77900ddab8624ad2.jpg"
        descricao="Se arrumar para ir para Etec"
      ></Card>

      <Card
        porcentagem="40%"
        titulo="Etec"
        imagem="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/62649497_1099632600224745_1950717718562865152_n.jpg"
        descricao="Período Etec das 13h00 ás 18h20"
      ></Card>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    backgroundColor: "#CAF0F8",

    borderColor: "#90E0EF",

    paddingHorizontal: 20,
    
  },

  titulo: {
    fontSize: 35,

    fontWeight: "bold",

    marginTop: 20,
  },

  subtitulo: {
    fontSize: 20,

    fontWeight: "bold",

    marginTop: 15,
  },

  cardTarefa: {
    marginTop: 20,

    backgroundColor: "#A8DADC",

    width: "100%",

    height: 125,

    alignItems: "center",

    justifyContent: "space-between",

    borderRadius: 10,

    borderColor: "white",

    borderWidth: 2,

    flexDirection: "row",

    padding: 15,

    shadowColor: "#000",

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.3,

    shadowRadius: 2,

    elevation: 5,
  },

  tituloCard: {
    fontSize: 15,

    fontWeight: "bold",

    color: "#1d3557",
  },

  textoCard: {
    fontSize: 10,

    marginTop: 5,
  },

  imagemCard: {
    width: 60,

    height: 60,

    marginRight: 15,
    borderRadius: 5,
  },
});
