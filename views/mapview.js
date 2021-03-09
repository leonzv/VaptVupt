import React, { Component, Fragment } from "react";
import "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";


Geocoder.init("AIzaSyCVi8UToRxa35GXIConEw7JTIJKQT400CI");

export default class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={{
            latitude: -23.5544,
            longitude: -47.1213,
            latitudeDelta: 0.9,
            longitudeDelta: 0.9,
          }}
          style={{ flex: 1 }}      
          showsUserLocation
          loadingEnabled
          provider={PROVIDER_GOOGLE}
        >
        </MapView>
      <View style={Style.mapContainer}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={Style.circle}
          onPress={() => props.navigation.navigate("Chamar")} //mudar isso depois
        >
          <TouchableOpacity style={Style.circle2} />
        </TouchableOpacity>
      </View>
      <View style={Style.procurarContainer}>
        <View style={Style.procurarBox}>
          <Text style={Style.procurarFont}> Endereço de partida: </Text>
          <View style={Style.whiteLineHorizontal} />
          <Text style={Style.procurarFont}> Endereço de entrega: </Text>
        </View>
        <View style={Style.procurarBox2}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={Style.circleProcurar}>
              <TouchableOpacity style={Style.circle2Procurar} />
            </TouchableOpacity>
            <Text style={Style.nameText}> Ruan Motoboy </Text>
            <View style={Style.whiteLineVertical} />
            <View style={{ flexDirection: "column" }}>
              <Text style={Style.horarioFont}>13:36</Text>
              <Text style={Style.horarioFont1}>Horário do Pedido</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={Style.horarioFont}>14:36</Text>
              <Text style={Style.horarioFont1}>Horario da Entrega</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    </View>
    );
  }
}