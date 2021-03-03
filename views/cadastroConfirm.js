import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity} from "react-native";
import Style from "../style/style";
import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";



export default function CadastroConfirm(props) {

  const [cpfcnpj, setCpfcnpj] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [uf, setUf] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [pais, setPais] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  if(toggleCheckBox == true) {
    alert("Voce concordou!")
  }
  return (
    <View style={Style.containerCadastro}>
      <View>
        <Image
          style={Style.vaiVexImgCadastro}
          source={require("../src/assets/img/vai-vex-logo.png")}
        />
        <Text
          style={{
            marginLeft: 30,
            fontSize: 20,
            marginBottom: 30,
            fontWeight: "bold",
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
        <CheckBox
          style={{
            marginTop: 10,
            marginLeft: 30,
          }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={{color: 'black', fontSize: 14, marginTop: 15,}}>
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
