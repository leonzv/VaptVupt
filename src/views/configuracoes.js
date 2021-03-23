import "react-native-gesture-handler";
import { View, Text, Switch, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";

export default function Configuracoes(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  return (
    <View style={Style.container}>
    <View style={{ flexDirection: "row",}}>
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
          marginTop: 60,
          color: "#000",
          fontFamily: "bariol_regular",
        }}
      >
        Configurações
      </Text>

      <View>
        <Text style={Style.textSettings}>Aumentar o tamanho da fonte:</Text>
        <Slider
          style={{
            width: "90%",
            height: 60,
            color: "#DBDBDB",
            marginLeft: 25,
            fontFamily: "bariol_regular",
          }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#346CFF"
          maximumTrackTintColor="#346CFF"
          thumbTintColor="#346CFF"
        />
      </View>
      <View>
        <Text style={Style.textSettings}>Forçar economia de energia</Text>
        <Switch
          trackColor={{ false: "#DBDBDB", true: "#DBDBDB" }}
          thumbColor={isEnabled ? "" : "#346CFF"}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={Style.switchBtn}
        />
      </View>
      <View>
        <Text style={Style.textSettings}>Habilitar modo escuro</Text>
        <Switch
          trackColor={{ false: "#DBDBDB", true: "#DBDBDB" }}
          thumbColor={isEnabled1 ? "" : "#346CFF"}
          onValueChange={toggleSwitch1}
          value={isEnabled1}
          style={Style.switchBtn}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity style={Style.greenPag}>
          <Text style={{
              fontSize: 16,
              color: "white",
              alignSelf: "center",
              textAlign: "center",
              fontFamily: "bariol_regular",
            }}>V O L T A R</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
