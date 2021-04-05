import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import Style from "../style/style";
import React, { useRef, useState, useEffect, Animated } from "react";

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

export default function modalLoad() {
    let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    // update progress until 100
    if (progress < 100) {
      setProgress(progress + 25);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
    }).start();
  }, [progress]);

  if(progress === 100){
    switchModal();
  }
  function switchModal() {
    if (modalVisible == true) {
      setModalVisible(!modalVisible);
      setModalVisible1(!modalVisible1);
    }
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  return (
    <View style={Style.containerLoad}>
      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={require("../assets/img/marker.png")} />
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={Style.centeredViewLoad}>
            <View style={Style.modalViewLoad}>
              <View style={{marginLeft: 50, justifyContent: 'center', alignItems: 'center'}}>
                <View style={Style.blueCircleLoad}>
                  <View style={Style.redCircleLoad}>
                    <Text style={Style.modalLoadText}>Buscando um motoboy...</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/*primeiro modal fim */}
      <View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={Style.centeredView1}>
            <View style={Style.modalView1}>
              <View style={Style.circleCorrida}>
                <View
                  style={Style.circle2Corrida}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <Text style={Style.corridaText}>Ruan</Text>
              <Text style={Style.corridaText}>Motoboy</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                  marginTop: 30,
                }}
              >
                <Text style={Style.aceitarText}>Aceitou fazer a corrida!</Text>
                <View style={Style.greenCircle} />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity
                  style={Style.acompanharBtn}
                  onPress={() => navigation.navigate("Gps")}
                >
                  <Text style={Style.acompanharText}> Acompanhar mapa </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
