import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MapView from "react-native-maps";
import Geocoder from "react-native-geocoding";
import Style from "../../style/style";
import Geolocation from "@react-native-community/geolocation";
import ModalLoad from "../../components/modalLoad";
Geocoder.init("AIzaSyCVi8UToRxa35GXIConEw7JTIJKQT400CI");

var mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#a3a3a3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a3a3a3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#bababa",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#bababa",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#94bcf0",
      },
      {
        weight: 1.5,
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

export default class Map extends Component {
  state = {
    region: null,
    destination: null,
    duration: null,
    location: null,
  };

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geolocation.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        const location = address.substring(0, address.indexOf(","));

        this.setState({
          location,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      }, //sucesso
      () => {}, //erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    );
  }

  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    });
  };

  handleBack = () => {
    this.setState({ destination: null });
  };

  render() {
    const { region, destination } = this.state;

    return (
      <View style={Style.mapContainer}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          loadingEnabled
          customMapStyle={mapStyle}
          ref={(el) => (this.mapView = el)}
        ></MapView>
        <View style={Style.mapDrawerOverlay} />
        <View style={{ flexDirection: "row", position: "absolute" }}>
          <TouchableOpacity
            style={Style.circle}
            title="Toggle drawer"
            onPress={() => navigation.toggleDrawer()}
          >
            <TouchableOpacity style={Style.circle2} />
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", alignSelf: "center", top: 300, }}>
          <ModalLoad />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
          }}
        >
          <View style={Style.procurarContainer}>
            <View style={Style.procurarBox}>
              <Text style={Style.procurarFont}>
                {" "}
                Endereço de partida: {region}{" "}
              </Text>
              <View style={Style.whiteLineHorizontal} />
              <Text style={Style.procurarFont}>
                {" "}
                Endereço de entrega: {destination}{" "}
              </Text>
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
