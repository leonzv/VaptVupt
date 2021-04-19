import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import Style from "../style/style";
import React, { useState } from "react";
import Swiper from "react-native-swiper";
import auth from "@react-native-firebase/auth";

export default function LoginConfirm(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const loginUser  = () => {
    auth()
    .signInWithEmailAndPassword(email, senha)
    .then(() => {
      alert('Usuario logado com sucesso!')
      props.navigation.navigate("LoadHome")
      if (email == "") {
        alert("Insira um email");
      }
      if (senha == "") {
        alert("Insira uma senha");
      }
    }) 
  }
  return (
    <KeyboardAvoidingView style={Style.container}>
      <View>
        <Image
          style={Style.vaiVexImg}
          source={require("../assets/img/vai-vex-logo.png")}
        />
      </View>
      <View style={{flex: 2}}>
      <Swiper
        style={Style.wrapper}
        loop={false}
        paginationStyle={{height: '100%', alignItems: 'flex-end',top: 15,}}
        activeDotColor="rgb(0,41,143)"
        dotStyle={{ width: 45, marginHorizontal: 10, bottom: 50,}}
        activeDotStyle={{ width: 65, marginHorizontal: 10, bottom: 50, }}
      >
        <View style={Style.retanguloAzul1}>
          <Text style={Style.loginText}>
            {" "}
            Um jeito simples e descomplicado de fazer entregas
          </Text>
          <Image
            style={Style.firstImg}
            source={require("../assets/img/moto-branca.png")}
          />
        </View>
        <View style={Style.retanguloVermelho1}>
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
      </View>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
      <View style={Style.textBox1}>
        <Text style={Style.textBoxFontCadastro}>Email:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox1}>
        <Text style={Style.textBoxFontCadastro}>Senha:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setSenha(text)}
          value={senha}
          placeholderTextColor="#fff"
          autoCapitalize="words"
          secureTextEntry={true}
        />
      </View>
      </View>
      <TouchableOpacity
        style={Style.btnCadastrar}
        onPress={() => loginUser()}
      >
        <Text style={Style.btnCadastrarFont}> Entrar </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
  }