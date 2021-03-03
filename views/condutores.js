import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";

export default function Condutores({ navigation }, props) {
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
            width: 80,
            marginRight: 18.5,
            bottom: 20,
          }}
          source={require("../src/assets/img/vai-vex-logo.png")}
        />
      </View>
      <Text
        style={{
          fontSize: 22,
          marginLeft: 30,
          textAlign: "left",
          marginRight: 90,
          marginTop: 60,
          color: "#000",
        }}
      >
        {" "}
        Condutores
      </Text>
      <View style={{ flex: 1 }}>
        <Swiper style={Style.wrapper} loop={false}
        paginationStyle={{ bottom: 15, }}>
        <View style={{flexDirection: 'column'}}>
            <View style={{ alignSelf: "flex-start",flexDirection: "row" }}>
              <View style={Style.bigCircleCond}>
                <View
                  style={Style.bigCircleCond2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  top: 10,
                  alignSelf: "center",
                  marginHorizontal: 60,
                }}
              >
                <Image
                  style={{ resizeMode: "contain", width: 80, height: 80 }}
                  source={require("../src/assets/img/bicicletaPreta.png")}
                />
                <Text style={{ fontSize: 20 }}>Luiz Silva</Text>
                <Text style={{ fontSize: 16 }}>Bicicleta</Text>
              </View>     
            </View>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  justifyContent: "space-around",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity style={Style.redBox}><Text style={Style.textCondutorBtn}>Avaliar condutor</Text></TouchableOpacity>
                <TouchableOpacity style={Style.blueBox}><Text style={Style.textCondutorBtn}>Deletar condutor</Text></TouchableOpacity>
              </View>
              <View/>
            </View>
          <View>
            <Text>outro condutor</Text>
          </View>
          <View>
            <Text>outro condutor</Text>
          </View>
          <View>
            <Text>outro condutor</Text>
          </View>
        </Swiper>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 30,
            textAlign: "left",
            marginRight: 90,
            color: "#000",
          }}
        >
          Corridas deste condutor
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
            onPress={() => navigation.navigate("Chamar")}
          >
            <Text style={Style.btnAdminFont}> Ir para o admin </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  );
}
