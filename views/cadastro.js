import "react-native-gesture-handler";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "../style/style";
import * as React from "react";
import auth from '@react-native-firebase/auth';

export default function Cadastro(props) {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [cpfcnpj, setCpfcnpj] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [uf, setUf] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [pais, setPais] = React.useState("");
  const [cep, setCep] = React.useState("");
  function createdUser(){
    alert('Usuario criado com sucesso!, Volte e faça login.')
  }
  const createUser  = () => {
    auth()
    .createUserWithEmailAndPassword(email, senha)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }
    const logoff = () => {
      auth()
    .signOut()
    .then(() => console.log('User signed out!'));
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
        <Text style={Style.textBoxFontCadastro}>Email:</Text>
        <TextInput
          style={Style.textBoxFont}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor="#fff"
          autoCapitalize="words"
        />
      </View>
      <View style={Style.textBox}>
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
      {/* <View style={Style.textBox}>
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
      </View> */}
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
      <TouchableOpacity
        style={Style.btnComecar}
        onPress={() => props.navigation.navigate("CadastroConfirm")}
        onPress={() => createUser()}
        onPress={() => createdUser()}
      >
        <Text style={Style.btnComecarFont}> Começar </Text>
      </TouchableOpacity>
    </View>
  );
}
