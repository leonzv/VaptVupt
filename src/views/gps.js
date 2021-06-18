import {View, Text, Image, TouchableOpacity, Modal, Pressable} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Style from '../style/style.js';
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import ModalLoad from "../components/modalLoad";
import {FONTS, COLORS, SIZES, icons} from '../constants';
const Gps = ({route, navigation}) => {
  const GOOGLE_API_KEY = 'AIzaSyDaJUFUIRPgP0kPOCF350ZOqPoYmPxrZ-w';
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
          color: "#dadada",
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
          color: "#c9c9c9",
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
  const mapView = React.useRef();
  function switchModal() {
    if (modalVisible == true) {
      setModalVisible(!modalVisible);
      setModalVisible1(!modalVisible1);
    }
  }
  function switchModal1() {
    if (modalVisible1 == true) {
      setModalVisible1(!modalVisible1);
      setModalVisible2(!modalVisible2);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(!modalVisible);
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setModalVisible1(!modalVisible1);
    }, 4500);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(modalVisible);
    }, 5000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setModalVisible1(modalVisible1);
    }, 9000);
  }, []);
  if (modalVisible) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size="large"
          color="blue"
          style={{ width: "35%", height: "35%" }}
        />
      </View>
    );
  }
  if(check1 && check == true){
    alert("Apenas um pode ser selecionado")
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);  
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [region, setRegion] = React.useState(mapRegion);
  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  const currentLocation = {
    streetName: 'Star Park',
    gps: {
      latitude: -23.5489,
      longitude: -46.6382,
    },
  };
  const vaga = {
    gps: {
      latitude: -23.5496,
      longitude: -46.6333,
    },
  };


  const fromLoc = currentLocation.gps;
  const toLoc = vaga.gps;
  const street = currentLocation.streetName;

  const mapRegion = {
    latitude: (fromLoc.latitude + toLoc.latitude) / 2,
    longitude: (fromLoc.longitude + toLoc.longitude) / 2,
    latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
    longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
  };

  function renderMap() {
    const destinationMarker = () => (
      <Marker coordinate={toLoc}
      >
      </Marker>
    );

    const carIcon = () => (
      <Marker
        coordinate={fromLoc}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}
      >
        <Image
          source={icons.car}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );
    return (
      <View style={{flex: 1}}>
        <MapView
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{height: '100%', width: '100%'}}
          customMapStyle={mapStyle}
        >
          <MapViewDirections
            origin={fromLoc}
            destination={toLoc}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
            onReady={result => {
              setDuration(result.duration);

              if (!isReady) {
                // Fit route into maps
                mapView.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 20,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 20,
                    top: SIZES.height / 8,
                  },
                });

                setIsReady(true);
              }
            }}
          />
          {destinationMarker()}
          {carIcon()}
        </MapView>
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
        <View style={{ position: "absolute", alignSelf: "center", top: 300 }}>
           <ModalLoad />
        </View>
        <View
          style={{
            justifyContent: "flex-end",
          }}
        >
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
                  <Text style={Style.horarioFont}>{Math.ceil(duration)} Minutos</Text>
                  <Text style={Style.horarioFont1}>Horario da Entrega</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderDestinationHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 90,
          left: 0,
          right: 0,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <Image
            source={'../assets/img/marker.png'}
            style={{
              width: 30,
              height: 30,
              marginRight: SIZES.padding,
            }}
          />

          <View style={{flex: 1}}>
            <Text style={{...FONTS.body2}}>{street}</Text>
          </View>

          <Text style={{...FONTS.body2}}>{Math.ceil(duration)} min</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      {renderMap()}
      {renderDestinationHeader()}
    </View>
  );
};

export default Gps;