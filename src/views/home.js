import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";

export default function Home(props) {
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
          marginTop: '8%',
          color: "#000",
          fontFamily: "bariol_regular",
        }}
      >
        {" "}
        Escolha o serviço desejado abaixo
      </Text>
      <View style={{flex: 2}}>
      <Swiper
        style={Style.wrapper}
        loop={false}
        paginationStyle={{height: '100%', alignItems: 'flex-end', top: 10,}}
        activeDotColor="rgb(0,41,143)"
        dotStyle={{ width: 45, marginHorizontal: 10, bottom: 50,}}
        activeDotStyle={{ width: 65, marginHorizontal: 10, bottom: 50, }}
      >
        <TouchableOpacity
          style={Style.retanguloAzulHome}
          onPress={() => props.navigation.navigate("Chamar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../assets/img/bicicleta.png")}
          />
          <Text style={Style.textRetanguloHome}> Bicicleta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.retanguloAzulHome}
          onPress={() => props.navigation.navigate("Chamar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../assets/img/moto-branca.png")}
          />
          <Text style={Style.textRetanguloHome}> Moto </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.retanguloAzulHome}
          onPress={() => props.navigation.navigate("Chamar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../assets/img/moto-branca.png")}
          />
          <Text style={Style.textRetanguloHome}> VUC </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.retanguloAzulHome}
          onPress={() => props.navigation.navigate("Chamar")}
        >
          <Image
            style={Style.imgHome}
            source={require("../assets/img/moto-branca.png")}
          />
          <Text style={Style.textRetanguloHome}> Caminhão </Text>
        </TouchableOpacity>
      </Swiper>
      </View>
      <View style={{flex: 1,justifyContent: 'flex-end'}}>
        <Text
          style={{
            fontSize: 24,
            marginLeft: 30,
            textAlign: "left",
            marginRight: 90,
            color: "#000",
            marginBottom: 5,
            fontFamily: "bariol_regular",
            marginTop: '40%'
          }}
        >
          Corridas
        </Text>
        <View style={Style.grayBox}>
          <View>
            <Text style={Style.grayBoxBigText}>25</Text>
            <Text style={Style.grayBoxSmallText}>Entregas</Text>
            <Text style={Style.grayBoxSmallText}>Realizadas</Text>
          </View>
          <View>
            <Text style={Style.grayBoxBigText}>25</Text>
            <Text style={Style.grayBoxSmallText}>Pedidos</Text>
            <Text style={Style.grayBoxSmallText}>Realizados</Text>
          </View>
          <TouchableOpacity
            style={Style.btnAdmin}
            onPress={() => props.navigation.navigate("Dashboard")}
          >
            <Text style={Style.btnAdminFont}> Ir para o admin </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}