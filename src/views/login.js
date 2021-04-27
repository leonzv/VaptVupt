import "react-native-gesture-handler";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";
import React from "react";
import Swiper from "react-native-swiper";

export default function Login(props) {
  return (
    <View style={Style.container}>
      <View>
        <Image
          style={Style.vaiVexImg}
          source={require("../assets/img/vai-vex-logo.png")}
        />
      </View>
      <Swiper
        style={Style.wrapper}
        loop={false}
        paginationStyle={{height: '100%', alignItems: 'flex-end',top: 15,}}
        activeDotColor="#0038d9"
        dotStyle={{ width: 45, marginHorizontal: 10, bottom: 50,}}
        activeDotStyle={{ width: 65, marginHorizontal: 10, bottom: 50, }}
        >
        <View style={Style.retanguloAzul}>
          <Text style={Style.loginText}>
            {" "}
            Um jeito simples e descomplicado de fazer entregas
          </Text>
          <Image
            style={Style.firstImg}
            source={require("../assets/img/moto-branca.png")}
          />
        </View>
        <View style={Style.retanguloVermelho}>
          <Text style={Style.loginText}>
            {" "}
            Uma simplicidade que cabe na sua mão
          </Text>
          <Image
            style={Style.firstImg}
            source={require("../assets/img/dinheiro.png")}
          />
        </View>
      </Swiper>
      <View>
        <TouchableOpacity
          style={Style.btnCadastrar}
          onPress={() => props.navigation.navigate("LoginConfirm")}
        >
          <Text style={Style.btnCadastrarFont}> Entrar </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.btnCadastrar}
          onPress={() => props.navigation.navigate("Cadastro")}
        >
          <Text style={Style.btnCadastrarFont}> Cadastre-se </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
