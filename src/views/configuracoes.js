import "react-native-gesture-handler";
import { View, Text, Switch, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import React, { useState, useContext } from "react";
import Slider from "@react-native-community/slider";
import {CustomText} from '../components/CustomText';
import {FontContext} from '../contexts/FontContext';

export default function Configuracoes({route, navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const {goBack} = navigation;
  const {FONTS, onChangeFonts} = useContext(FontContext);
  const changeFontSize = value => {
    const updatedFonts = Object.keys(FONTS).reduce( 
      (accumulator, key) => ({
        ...accumulator,
        [key]: {
          ...FONTS[key],
          lineHeight: FONTS[key].lineHeight,
          fontSize: Number(FONTS[key].defaultValue) + Number(value)
        },
      }),
      {},
    );
    updatedFonts.defaultValue = value;
    onChangeFonts(updatedFonts);
  };
  console.log(onChangeFonts);
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
          <CustomText fontType="body4" style={Style.textCircle}>Bem vindo, Usuário!</CustomText>
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
          marginTop: 60,
          color: "#000",
          fontFamily: "bariol_regular",
        }}
      >
        Configurações
      </Text>

      <View>
        <CustomText fontType="body4" style={Style.textSettings}>Aumentar o tamanho da fonte:</CustomText>
        <Slider
          style={{
            width: "90%",
            height: 60,
            color: "#DBDBDB",
            marginLeft: 25,
            fontFamily: "bariol_regular",
          }}
          minimumValue={0}
          maximumValue={3}
          minimumTrackTintColor="#346CFF"
          maximumTrackTintColor="#346CFF"
          thumbTintColor="#346CFF"
          step={1}
          onValueChange={changeFontSize}
        />
      </View>
      <View>
        <CustomText fontType="body4" style={Style.textSettings}>Forçar economia de energia</CustomText>
        <Switch
          trackColor={{ false: "#DBDBDB", true: "#DBDBDB" }}
          thumbColor={isEnabled ? "" : "#346CFF"}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={Style.switchBtn}
        />
      </View>
      <View>
        <CustomText fontType="body4" style={Style.textSettings}>Habilitar modo escuro</CustomText>
        <Switch
          trackColor={{ false: "#DBDBDB", true: "#DBDBDB" }}
          thumbColor={isEnabled1 ? "" : "#346CFF"}
          onValueChange={toggleSwitch1}
          value={isEnabled1}
          style={Style.switchBtn}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity style={Style.greenPag}
        onPress={() => goBack('B')}>
          <CustomText fontType="h3" style={Style.voltarButton}>Voltar</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
