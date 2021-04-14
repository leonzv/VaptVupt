import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";

export default function Dashboard(props) {
  const {goBack} = props.navigation;
  return (
    <View style={Style.container}>
    <ScrollView>
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
          height: 40,
          marginLeft: '20%',
          marginRight: 30,
          flex: 1,
          top: 12,
        }}
        source={require("../assets/img/vai-vex-logo.png")}
      />
    </View>
        <View style={{ height: 420 }}>
          <Text
            style={{
              fontSize: 22,
              marginLeft: 30,
              textAlign: "left",
              marginRight: 90,
              marginTop: 60,
              color: "#000",
              fontFamily: "bariol_regular",
            }}
          >
            {" "}
            Dashboard
          </Text>
          <Swiper
            style={Style.wrapper}
            loop={false}
            activeDotColor="rgb(0,41,143)"
            dotStyle={{ width: 35, marginHorizontal: 10 }}
            activeDotStyle={{ width: 55, marginHorizontal: 10 }}
          >
            <TouchableOpacity
              style={Style.retanguloAzulHome}
              onPress={() => props.navigation.navigate("Condutores")}
            >
              <Image
                style={Style.imgHome}
                source={require("../assets/img/condutor.png")}
              />
              <Text style={Style.textRetanguloHome}> Condutores</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.retanguloAzulHome}
              onPress={() => props.navigation.navigate("Chamar")}
            >
              <Image
                style={Style.imgHome}
                source={require("../assets/img/moto-branca.png")}
              />
              <Text style={Style.textRetanguloHome}> Chamar </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.retanguloAzulHome}
              onPress={() => props.navigation.navigate("Mensagem")}
            >
              <Image
                style={Style.imgHome}
                source={require("../assets/img/moto-branca.png")}
              />
              <Text style={Style.textRetanguloHome}> Mensagem </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Style.retanguloAzulHome}
              onPress={() => props.navigation.navigate("Conclusao")}
            >
              <Image
                style={Style.imgHome}
                source={require("../assets/img/moto-branca.png")}
              />
              <Text style={Style.textRetanguloHome}> Conclusão </Text>
            </TouchableOpacity>
          </Swiper>
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              marginLeft: 30,
              textAlign: "left",
              marginRight: 90,
              color: "#000",
              marginBottom: 5,
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
        <View style={{ justifyContent: "flex-end", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 22,
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
          <TouchableOpacity style={Style.enderecosBtn}
          onPress={() => props.navigation.navigate("EnderecosList")}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 14 }}>
              Ver lista de endereços
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
