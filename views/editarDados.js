import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity,TextInput } from "react-native";
import Style from "../style/style";

export default function EditarDados({ navigation }, props) {
    const [nome, setNome] = React.useState("");
    const [cpfcnpj, setCpfcnpj] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    const [numero, setNumero] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [uf, setUf] = React.useState("");
    const [cidade, setCidade] = React.useState("");
    const [pais, setPais] = React.useState("");
    const [cep, setCep] = React.useState("");
    return(
<View style={Style.containerCadastro}>
      <View>
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
            marginLeft: 30,
            fontSize: 22,
            marginBottom: 30,
            marginVertical: 30,
          }}
        >
          Editar dados pessoais
        </Text>
      </View>
      <View style={Style.textBox}>
        <Text style={Style.textBoxFontCadastro}>Nome:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setNome(text)}
          value={nome}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
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
      <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 30, marginTop: 50,}}>
          <TouchableOpacity style={Style.deletarDados}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 16,}}>Deletar dados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.atualizarDados}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 16,}}>Atualizar dados</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}