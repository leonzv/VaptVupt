import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";

export default function Dashboard(props) {
  const { goBack } = props.navigation;
  return (
    <View style={Style.container}>
      <ScrollView>
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
              marginLeft: "5%",
              marginRight: 30,
              flex: 1,
              top: 12,
            }}
            source={require("../assets/img/vai-vex-logo.png")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 22,
              marginLeft: 30,
              textAlign: "left",
              marginRight: 90,
              marginTop: "10%",
              color: "#000",
              fontFamily: "bariol_regular",
            }}
          >
            {" "}
            Dashboard
          </Text>
          <View style={{ minHeight: 400, maxHeight: 400 }}>
            <Swiper
              style={Style.wrapperDashboard}
              loop={false}
              paginationStyle={{
                height: "100%",
                alignItems: "flex-end",
                top: 10,
              }}
              activeDotColor="#0038d9"
              dotStyle={{ width: 45, marginHorizontal: 10, bottom: 50 }}
              activeDotStyle={{ width: 65, marginHorizontal: 10, bottom: 50 }}
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
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: "flex-end" }}>
            <Text
              style={{
                fontSize: 24,
                marginLeft: 30,
                textAlign: "left",
                marginRight: 90,
                color: "#000",
                marginBottom: 10,
                fontFamily: "bariol_regular",
              }}
            >
              Corridas
            </Text>
            <View style={Style.grayBox}>
              <View>
                <Text style={Style.grayBoxBigText}>25</Text>
                <Text style={Style.grayBoxSmallText}>Entregas realizadas</Text>
              </View>
              <View>
                <Text style={Style.grayBoxBigText}>25</Text>
                <Text style={Style.grayBoxSmallText}>Pedidos realizados</Text>
              </View>
              <View>
                <Text style={Style.grayBoxBigText}>25</Text>
                <Text style={Style.grayBoxSmallText}>Créditos realizados</Text>
              </View>
            </View>
          </View>
          <View
            style={{ justifyContent: "flex-end", marginBottom: 30, flex: 1 }}
          >
            <Text
              style={{
                fontSize: 24,
                marginLeft: 30,
                textAlign: "left",
                marginRight: 90,
                marginBottom: 10,
                color: "#000",
                fontFamily: "bariol_regular",
              }}
            >
              Dados Pessoais
            </Text>
            <View style={Style.grayBoxDados}>
              <Text style={Style.textDashboard}>Emerson Garcia</Text>
              <Text style={Style.textDashboard}>Rua Jaú, 365</Text>
              <Text style={Style.textDashboard}>Bairro Nova Natal</Text>
              <Text style={Style.textDashboard}>São Paulo - SP</Text>
              <TouchableOpacity
                style={Style.editarDadosBtn}
                onPress={() => props.navigation.navigate("EditarDados")}
              >
                <Text
                  style={{ color: "white", textAlign: "center", fontSize: 14 }}
                >
                  Editar dados
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={Style.enderecosBtn}
              onPress={() => props.navigation.navigate("EnderecosList")}
            >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 14 }}
              >
                Ver lista de endereços
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
