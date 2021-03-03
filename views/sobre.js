import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import React from "react";

export default function Sobre(props) {
  return (
    <View style={Style.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={Style.circle}>
          <TouchableOpacity
            style={Style.circle2}
            title="Toggle drawer"
            onPress={() => navigation.toggleDrawer()}
          />
        </TouchableOpacity>
        <Text style={Style.textCircle}>Bem vindo, Emerson!</Text>
        <Image
          style={{
            alignSelf: "flex-end",
            resizeMode: "contain",
            marginRight: 30,
            width: 75,
            bottom: 15,
          }}
          source={require("../src/assets/img/vai-vex-logo.png")}
        />
      </View>
      <Text
        style={{
          fontSize: 24,
          marginLeft: 30,
          textAlign: "left",
          marginRight: 90,
          marginTop: 70,
          marginBottom: 50,
          color: "#000",
        }}
      >
        Sobre
      </Text>
      <Text style={Style.textSobre}>Nome do app: VaptVupt</Text>
      <Text style={Style.textSobre}>Versão: 1.0</Text>
      <Text style={Style.textSobre}>Ano: 2019</Text>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}
      >
        <TouchableOpacity style={Style.greenBtn}>
          <Text
            style={{
              fontSize: 16,
              color: "white",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
