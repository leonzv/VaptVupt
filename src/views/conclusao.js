import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";

export default function Pagamentos(props) {
  const {goBack} = props.navigation;
  return (
    <View style={Style.container}>
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
            onPress={() => props.navigation.toggleDrawer()}
          />
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={Style.conclusaoText}>Nome do motoboy: José Fernandes dos Santos</Text>
        <Text style={Style.conclusaoText}>Tipo de transporte: Motofrete</Text>
        <Text style={Style.conclusaoText}>Forma de pagamento: Dinheiro</Text>
        <Text style={Style.conclusaoText}> Protocolo: VXS000252019</Text>
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
        <TouchableOpacity style={Style.greenPag}
        onPress={() => goBack('B')}>
          <Text
            style={{
              fontSize: 20,
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
