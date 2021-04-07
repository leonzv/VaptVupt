import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import Style from "../style/style";

export default function mensagem(props) {
  const [message, setMessage] = useState("");
  const {goBack} = props.navigation;
  return (
    <KeyboardAvoidingView style={Style.container} behavior='height'>
      <View style={{ flexDirection: "row",}}>
        <TouchableOpacity style={Style.circle}>
          <TouchableOpacity
            style={Style.circle2}
            title="Toggle drawer"
            onPress={() => props.navigation.toggleDrawer()}
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
          fontSize: 20,
          marginLeft: 30,
          textAlign: "left",
          marginRight: 90,
          marginTop: 15,
          color: "#000",
          fontFamily: "bariol_regular",
        }}
      >
        {" "}
        Mensagem
      </Text>
      <ScrollView style={{ marginBottom: 15 }}>
        <View>
          <View style={Style.boxMessageRight}>
            <Text style={Style.textMessage}>Boa tarde!</Text>
          </View>
          <View style={Style.boxMessageLeft}>
            <Text style={Style.textMessage}>Olá, está chegando?</Text>
          </View>
          <View style={Style.boxMessageRight}>
            <Text style={Style.textMessage}> Sim, Estou chegando! </Text>
          </View>
          <View style={Style.boxMessageLeft}>
            <Text style={Style.textMessage}> Mensagem teste</Text>
          </View>
          <View style={Style.boxMessageRight}>
            <Text style={Style.textMessage}> Mensagem teste 123</Text>
          </View>
          <View style={Style.boxMessageLeft}>
            <Text style={Style.textMessage}>
              {" "}
              Mensagem teste Mensagem teste Mensagem teste Mensagem teste
              Mensagem teste Mensagem teste
            </Text>
          </View>
          <View style={Style.boxMessageRight}>
            <Text style={Style.textMessage}> Mensagem</Text>
          </View>
          <View style={Style.boxMessageLeft}>
            <Text style={Style.textMessage}> Teste</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{ justifyContent: "flex-end" }}>
        <View style={Style.messageBox}>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setMessage(text)}
            value={message}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#666"
            autoCapitalize="words"
          />
        </View>
        <TouchableOpacity style={Style.enviarBtn}>
          <Text
            style={{
              fontSize: 16,
              color: "white",
              alignSelf: "center",
              fontFamily: "bariol_regular",
              textAlign: "center",
            }}
          >
            Enviar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.greenMessageBtn}
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
    </KeyboardAvoidingView>
  );
}
