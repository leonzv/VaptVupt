import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";
const styles = StyleSheet.create({
  slide: {
    minHeight: '50%',
    maxHeight: 500,
  },
});
import {CustomText} from '../components/CustomText';
export default function Home(props) {
  const window = useWindowDimensions();
  function responsive(){
  if (window.height > 900) {
    styles.slide.maxHeight = 500;
  }
}
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
        <CustomText style={Style.textCircle}>Bem vindo, Emerson!</CustomText>
        <Image
          style={{
            alignSelf: "center",
            resizeMode: "contain",
            width: 200,
            height: 80,
            marginLeft: "5%",
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
          marginTop: "8%",
          color: "#000",
          fontFamily: "bariol_regular",
        }}
      >
        {" "}
        Escolha o serviço desejado abaixo
      </Text>
      <View style={styles.slide}>
        <Swiper
          style={Style.wrapper}
          loop={false}
          paginationStyle={{ height: "100%", alignItems: "flex-end", top: 10 }}
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
            <CustomText style={Style.textRetanguloHome}> Bicicleta</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.retanguloAzulHome}
            onPress={() => props.navigation.navigate("Chamar")}
          >
            <Image
              style={Style.imgHome}
              source={require("../assets/img/moto-branca.png")}
            />
            <CustomText style={Style.textRetanguloHome}> Moto </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.retanguloAzulHome}
            onPress={() => props.navigation.navigate("Chamar")}
          >
            <Image
              style={Style.imgHome}
              source={require("../assets/img/moto-branca.png")}
            />
            <CustomText style={Style.textRetanguloHome}> VUC </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.retanguloAzulHome}
            onPress={() => props.navigation.navigate("Chamar")}
          >
            <Image
              style={Style.imgHome}
              source={require("../assets/img/moto-branca.png")}
            />
            <CustomText style={Style.textRetanguloHome}> Caminhão </CustomText>
          </TouchableOpacity>
        </Swiper>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text
          style={{
            fontSize: 24,
            marginLeft: 30,
            textAlign: "left",
            marginRight: 90,
            color: "#000",
            marginBottom: 5,
            fontFamily: "bariol_regular",
            marginTop: "40%",
          }}
        >
          {" "}
          Corridas
        </Text>
        <View style={Style.grayBox}>
          <View>
            <CustomText style={Style.grayBoxBigText}>25</CustomText>
            <CustomText fontType="body3" style={Style.grayBoxSmallText}>Entregas</CustomText>
            <CustomText fontType="body3" style={Style.grayBoxSmallText}>Realizadas</CustomText>
          </View>
          <View>
            <CustomText style={Style.grayBoxBigText}>25</CustomText>
            <CustomText fontType="body3" style={Style.grayBoxSmallText}>Pedidos</CustomText>
            <CustomText fontType="body3" style={Style.grayBoxSmallText}>Realizados</CustomText>
          </View>
          <TouchableOpacity
            style={Style.btnAdmin}
            onPress={() => props.navigation.navigate("Dashboard")}
          >
            <CustomText fontType="body3" style={Style.btnAdminFont}> Ir para o admin </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
