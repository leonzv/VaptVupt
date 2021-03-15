import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";

export default function Pagamentos({ navigation }, props) {
  return (
    <View style={Style.container}>
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
            marginRight: 30,
            width: 75,
            bottom: 15,
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
          marginTop: 30,
          color: "#000",
          fontFamily: "bariol_regular",
        }}
      >
        {" "}
        Conclusão de entrega
      </Text>
      <View style={{ alignSelf: "center" }}>
        <View style={Style.bigCircle}>
          <View
            style={Style.bigCircle2}
            title="Toggle drawer"
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text>Nome do motoboy: José Fernandes dos Santos</Text>
        <Text>Tipo de transporte: Motofrete</Text>
        <Text>Forma de pagamento: Dinheiro</Text>
        <Text> Protocolo: VXS000252019</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 20,}}>
        <View style={Style.grayBoxConc}>
          <Text style={{alignSelf: 'center', textAlign: "center", fontSize: 24, color: "black", fontFamily: "bariol_regular", }}>
            Total(R$):{" "}
          </Text>
            <Text style={{alignSelf: 'center', textAlign: "center", fontSize: 48, color: "black", fontFamily: "bariol_regular", }}>
              135,00
            </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity style={Style.greenPag}>
          <Text
            style={{
              fontSize: 16,
              color: "white",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
