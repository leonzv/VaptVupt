import React, { useState } from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";
import CheckBox from "@react-native-community/checkbox";

export default function Pagamentos({ navigation }, props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  if(toggleCheckBox == true) {
    alert("Voce concordou!")
  }
  return (
    <View style={Style.container}>
      <View style={{ flexDirection: "row"}}>
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
            width: 75,
            marginRight: 18.5,
            bottom: 15,
          }}
          source={require("../src/assets/img/vai-vex-logo.png")}
        />
      </View>
      <Text
        style={{
          fontSize: 24,
          marginLeft: 30,
          textAlign: "left",
          marginRight: 90,
          marginTop: 60,
          color: "#000",
        }}
      >
        {" "}
        Pagamentos
      </Text>
      <View style={{flex: 1, minHeight: '12%'}}>
      <Swiper style={Style.wrapper} loop={false}>
        <TouchableOpacity
          style={Style.retanguloAzulPag}
          onPress={() => navigation.navigate("Procurar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../src/assets/img/dinheiro2.png")}
          />
          <Text style={Style.textRetanguloHome}> Dinheiro</Text>
        </TouchableOpacity>
      </Swiper>
     </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <CheckBox
          style={{
            marginLeft: 30,
            marginTop: 80,
          }}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={Style.textPagamento}>
          Declaro informar ao condutor que o pagamento será feito em dinheiro.
        </Text>
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
