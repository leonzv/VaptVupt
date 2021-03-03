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
          source={require("../src/assets/img/vai-vex-logo.png")}
        />
      </View>
      <Swiper
        style={Style.wrapper}
        autoplay={true}
        autoplayTimeout={4}
        loop={false}  
        showsPagination
      >
        <View style={Style.retanguloAzul}>
          <Text style={Style.loginText}>
            {" "}
            Um jeito simples e descomplicado de fazer entregas
          </Text>
          <Image
            style={Style.firstImg}
            source={require("../src/assets/img/moto-branca.png")}
          />
        </View>
        <View style={Style.retanguloVermelho}>
          <Text style={Style.loginText}>
            {" "}
            Uma simplicidade que cabe na sua mão
          </Text>
          <Image
            style={Style.firstImg}
            source={require("../src/assets/img/dinheiro.png")}
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
