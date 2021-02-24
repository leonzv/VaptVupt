import React, { Component, Fragment } from "react";
import "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";
import Style from "../style/style.js";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";


Geocoder.init("AIzaSyCVi8UToRxa35GXIConEw7JTIJKQT400CI");

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  state = {
    region: null,
    destination: null,
    duration: null,
    location: null,
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
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
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          loadingEnabled
          ref={(el) => (this.mapView = el)}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
        >
          {destination && (
            <Fragment>
              <Directions
                origin={region}
                destination={destination}
                onReady={(result) => {
                  this.setState({ duration: Math.floor(result.duration) });

                  this.mapView.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: getPixelSize(50),
                      left: getPixelSize(50),
                      top: getPixelSize(50),
                      bottom: getPixelSize(350),
                    },
                  });
                }}
              />
              <Marker
                coordinate={destination}
                anchor={{ x: 0, y: 0 }}
                image={markerImage}
              >
                <LocationBox>
                  <LocationText>{destination.title}</LocationText>
                </LocationBox>
              </Marker>

              <Marker coordinate={region} anchor={{ x: 0, y: 0 }}></Marker>
            </Fragment>
          )}
        </MapView>
        <View style={Style.headerGps}>
          <Text style={Style.textGps}>Bem vindo, João!</Text>
        </View>

        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity
            style={Style.boxGps}
            onPress={() => this.props.navigation.navigate("Load")}
          >
            <Text style={Style.textBoxTop}>B U S C A R  N O V A M E N T E</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Style.boxGps}
            onPress={() => this.props.navigation.navigate("EditarDados")}
          >
            <Text style={Style.textBoxBot}>S A I R  D O  A P P</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
