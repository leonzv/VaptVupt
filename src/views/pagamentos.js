import React, { useState } from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Pagamentos(props) {
  const [check, setCheck] = useState(false);
  if (check == true) {
    alert("Voce concordou!");
  }
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
          <Text style={Style.textCircle}>Bem vindo, Emerson!</Text>
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
        {" "}
        Pagamentos
      </Text>
      <View style={{ minHeight: 250, maxHeight: 300 }}>
        <Swiper
          style={Style.wrapper}
          loop={false}
          activeDotColor="#0038d9"
          dotStyle={{ width: 35, marginHorizontal: 10, top: 60, }}
          activeDotStyle={{ width: 55, marginHorizontal: 10, top: 60, }}
        >
          <TouchableOpacity
            style={Style.retanguloAzulPag}
            onPress={() => props.navigation.navigate("Procurar")}
          >
            <Image
              style={Style.imgHome}
              source={require("../assets/img/dinheiro2.png")}
            />
            <Text style={Style.textRetanguloHome}> Dinheiro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.retanguloAzulPag}
            onPress={() => props.navigation.navigate("Procurar")}
          >
            <Image
              style={Style.imgHome}
              source={require("../assets/img/dinheiro2.png")}
            />
            <Text style={Style.textRetanguloHome}> Cartão de crédito ou debito</Text>
          </TouchableOpacity>
        </Swiper>
      </View>
      <View style={{marginTop: '30%'}}/>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <BouncyCheckbox
          size={32}
          fillColor="rgb(0,41,143)"
          unfillColor="#CFCFCF"
          iconStyle={{
            borderRadius: 4,
            borderColor: "white",
            borderWidth: 0,
            marginLeft: 40,
            bottom: '60%'
          }}
          onPress={(newValue) => setCheck(newValue)}
        />
        <Text style={Style.textPagamento}>
          Declaro informar ao condutor que o pagamento será feito em dinheiro.
        </Text>
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
