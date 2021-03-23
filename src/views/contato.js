import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import React, { useState } from "react";

export default function Contato(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <View style={Style.container}>
    <View style={{ flexDirection: "row",}}>
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
      <Text
        style={{
          fontSize: 24,
          marginLeft: 30,
          textAlign: "left",
          marginRight: 90,
          marginTop: 50,
          marginBottom: 20,
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
      <View>
        <TouchableOpacity style={Style.blueBtnEnviar}>
          <Text
            style={{
              fontSize: 16,
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
        <TouchableOpacity style={Style.greenBtn}>
          <Text
            style={{
              fontSize: 16,
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
