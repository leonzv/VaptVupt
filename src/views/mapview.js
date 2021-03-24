import React, { Component } from "react";
import "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Geocoder from "react-native-geocoding";


Geocoder.init("AIzaSyCVi8UToRxa35GXIConEw7JTIJKQT400CI");
var mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#a3a3a3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a3a3a3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#bababa"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#bababa"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#94bcf0"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
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
          customMapStyle={mapStyle}
        >
        </MapView>
      <View style={Style.mapContainer}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={Style.circle}
          title="Toggle drawer"
            onPress={() => navigation.toggleDrawer()} 
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