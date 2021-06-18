import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import React, { useState } from "react";

export default function Contato(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const {goBack} = props.navigation;
  return (
    <View style={Style.container}>
    <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={Style.circle}>
            <TouchableOpacity
              style={Style.circle2}
              title="Toggle drawer"
              onPress={() => props.navigation.toggleDrawer()}
            />
          </TouchableOpacity>
          <Text style={Style.textCircle}>Bem vindo, Usuário!</Text>
          <Image
            style={{
              alignSelf: "center",
              resizeMode: "contain",
              width: 220,
              height: 80,
              marginLeft: '5%',
              marginRight: 30,
              flex: 1,
              top: 12,
            }}
            source={require("../assets/img/vai-vex-logo.png")}
          />
        </View>
      <Text
        style={{
          fontSize: 24,
          marginLeft: 30,
          textAlign: "left",
          marginRight: 90,
          marginTop: '10%',
          color: "#000",
          fontFamily: "bariol_regular",
        }}
      >
        Contato
      </Text>
      <View style={Style.textBoxContato}>
        <Text style={Style.textBoxFontContato}>Nome:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setNome(text)}
          value={nome}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBoxContato}>
        <Text style={Style.textBoxFontContato}>E-Mail:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBoxContatoDesc}>
        <TextInput
          style={Style.textBoxDesc}
          onChangeText={(text) => setDesc(text)}
          value={desc}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={Style.blueBtnEnviar}>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              alignSelf: "center",
              textAlign: "center",
              fontFamily: "bariol_regular",
            }}
          >
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-end" }}
      >
        <TouchableOpacity style={Style.greenBtn}
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
