import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";

export default function Dashboard({ navigation }, props) {
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
            width: 80,
            marginRight: 18.5,
            bottom: 20,
          }}
          source={require("../src/assets/img/vai-vex-logo.png")}
        />
      </View>
      <Text
        style={{
          fontSize: 22,
          marginLeft: 30,
          textAlign: "left",
          marginRight: 90,
          marginTop: 60,
          color: "#000",
        }}
      >
        {" "}
        Dashboard
      </Text>
      <Swiper style={Style.wrapper} loop={false}>
        <TouchableOpacity
          style={Style.retanguloAzulHome}
          onPress={() => navigation.navigate("Chamar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../src/assets/img/condutor.png")}
          />
          <Text style={Style.textRetanguloHome}> Condutores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.retanguloAzulHome}
          onPress={() => navigation.navigate("Chamar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../src/assets/img/moto-branca.png")}
          />
          <Text style={Style.textRetanguloHome}> Moto </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.retanguloAzulHome}
          onPress={() => navigation.navigate("Chamar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../src/assets/img/moto-branca.png")}
          />
          <Text style={Style.textRetanguloHome}> VUC </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.retanguloAzulHome}
          onPress={() => navigation.navigate("Chamar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../src/assets/img/moto-branca.png")}
          />
          <Text style={Style.textRetanguloHome}> Caminhão </Text>
        </TouchableOpacity>
      </Swiper>
      <View>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 30,
            textAlign: "left",
            marginRight: 90,
            color: "#000",
            marginBottom: 5,
          }}
        >
          Corridas
        </Text>
        <View style={Style.grayBox}>
          <View>
            <Text style={Style.grayBoxBigText}>25</Text>
            <Text style={Style.grayBoxSmallText}>Entregas realizadas</Text>
          </View>
          <View>
            <Text style={Style.grayBoxBigText}>25</Text>
            <Text style={Style.grayBoxSmallText}>Pedidos realizados</Text>
          </View>
          <View>
            <Text style={Style.grayBoxBigText}>25</Text>
            <Text style={Style.grayBoxSmallText}>Créditos realizados</Text>    
          </View>
        </View>
      </View>
    </View>
  );
}
