import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function CadastroConfirm(props) {
  const [cpfcnpj, setCpfcnpj] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [uf, setUf] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [pais, setPais] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [Check, setCheck] = useState(false);
  if (Check == true) {
    alert("Voce concordou!");
  }
  return (
    <View style={Style.containerCadastro}>
      <View>
        <Image
          style={Style.vaiVexImgCadastro}
          source={require("../assets/img/vai-vex-logo.png")}
        />
        <Text
          style={{
            marginLeft: 30,
            fontSize: 20,
            marginBottom: 30,
            fontWeight: "bold",
            fontFamily: "bariol_regular",
          }}
        >
          Preencha o forumário completo:
        </Text>
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>CPF/CNPJ:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setCpfcnpj(text)}
          value={cpfcnpj}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>Endereço:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setEndereco(text)}
          value={endereco}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.box3070}>
        <View style={Style.textBox30}>
          <Text style={Style.textBoxFontCadastro}>Nº:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setNumero(text)}
            value={numero}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.textBox70}>
          <Text style={Style.textBoxFontCadastro}>Bairro:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setBairro(text)}
            value={bairro}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
      </View>
      <View style={Style.box3070}>
        <View style={Style.textBox30}>
          <Text style={Style.textBoxFontCadastro}>UF:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setUf(text)}
            value={uf}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.textBox70}>
          <Text style={Style.textBoxFontCadastro}>Cidade:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setCidade(text)}
            value={cidade}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>País:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setPais(text)}
          value={pais}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>CEP:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setCep(text)}
          value={cep}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
      <BouncyCheckbox
          size={28}
          fillColor="#0087ff"
          unfillColor="#CFCFCF"
          iconStyle={{
            borderColor: "white",
            borderWidth: 5,
            marginLeft: 20,
            marginTop: 30,
          }}
          onPress={(newValue) => setCheck(newValue)}
        />
        <Text style={{ color: "black", fontSize: 14, marginTop: 25, fontFamily: "bariol_regular", }}>
          Li e estou de acordo com o termo de serviço
        </Text>
      </View>
      <TouchableOpacity
        style={Style.btnComecar}
        onPress={() => props.navigation.navigate("LoadHome")}
      >
        <Text style={Style.btnComecarFont}> Começar </Text>
      </TouchableOpacity>
    </View>
  );
}
