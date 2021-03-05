import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import React, { useState, useEffect }  from "react";
import Swiper from "react-native-swiper";
import auth from '@react-native-firebase/auth';


export default function LoginConfirm(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const loginUser  = () => {
    auth()
    .signInWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('User account logged in');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      if (error.code === 'auth/invalid-password'){
        console.log('Senha incorreta')
      }
  
      console.error(error);
    });
  }
  return (
    <View style={Style.container}>
      <View>
        <Image
          style={Style.vaiVexImg}
          source={require("../src/assets/img/vai-vex-logo.png")}
        />
      </View>
      <Swiper style={Style.wrapper} loop={false}>
        <View style={Style.retanguloAzul1}>
          <Text style={Style.loginText}>
            {" "}
            Um jeito simples e descomplicado de fazer entregas
          </Text>
          <Image
            style={Style.firstImg}
            source={require("../src/assets/img/moto-branca.png")}
          />
        </View>
        <View style={Style.retanguloVermelho1}>
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
      <View style={Style.textBox2}>
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
        <TouchableOpacity
          style={Style.btnCadastrar}
          onPress={() => props.navigation.navigate("LoadHome")}
          onPress={() => loginUser()}
        >
          <Text style={Style.btnCadastrarFont}> Entrar </Text>
        </TouchableOpacity>
      
    </View>
  );
}


