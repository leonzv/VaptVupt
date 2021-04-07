import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Style from "../style/style";
import Modal from "../components/modal";

export default function maisFavoritos(props) {
  const {goBack} = props.navigation;
  return (
    <View style={Style.container}>
      <View style={{ flexDirection: "row",}}>
        <TouchableOpacity style={Style.circle}>
          <TouchableOpacity
            style={Style.circle2}
            title="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
          />
        </TouchableOpacity>
        <Text style={Style.textCircle}>Bem vindo, Emerson!</Text>    
        <Image
          style={{
            alignSelf: "center",
            resizeMode: "contain",
            width: 80,
            marginLeft: '20%',
            marginRight: 30,
            flex: 1,
            top: 12,
          }}
          source={require("../assets/img/vai-vex-logo.png")}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 30,
            textAlign: "left",
            marginRight: 90,
            marginTop: 60,
            color: "#000",
            marginBottom: 30,
            fontFamily: "bariol_regular",
          }}
        >
          Endereço{" "}
        </Text>
        <Text style={Style.maisText}> Avenida Maracá, 800, Jd Satélite </Text>
        <Text style={Style.maisText}> Marília-SP </Text>
        <Text style={Style.maisText}> CEP: 7850-223 </Text>
      </View>
      <View>
      <Modal/>
      </View>
      <View style={{ justifyContent: "flex-end", flex: 1,}}>
        <TouchableOpacity style={Style.greenPag}
        onPress={() => goBack('B')}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              alignSelf: "center",
              textAlign: "center",
              fontFamily: "bariol_regular",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
