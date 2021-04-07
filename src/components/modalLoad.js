import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import Style from "../style/style";
import React, { useState } from "react";

export default function modalLoad() {
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
              <View
                style={{
                  marginLeft: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={Style.blueCircleLoad}
                  onPress={() => switchModal()}
                >
                  <Pressable
                    style={Style.redCircleLoad}
                    onPress={() => switchModal()}
                  >
                    <Text style={Style.modalLoadText}>
                      Buscando um motoboy...
                    </Text>
                  </Pressable>
                </TouchableOpacity>
              </View>
              <Pressable
                onPress={switchModal}
                style={{
                  backgroundColor: "transparent",
                  width: 90,
                  height: 40,
                  top: 130,
                }}
              />
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
            <View style={Style.modalViewEnc}>
              <View style={Style.circleCorrida}>
                <View
                  style={Style.circle2Corrida}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <Text style={Style.corridaText}>Ruan</Text>
              <Text style={Style.corridaText}>Motoboy</Text>
              <View style={{ flex: 1, flexDirection: "row", alignItems: 'flex-end',justifyContent: 'center', marginBottom: 30,}}>
                <View>
                  <Text style={Style.encontradoLeftText}>Placa</Text>
                  <Text style={Style.encontradoLeftText}>RGC 2563</Text>
                </View>
                <View style={{backgroundColor: 'white', width: 1, height: 70,}}/>
                <View>
                  <Text style={Style.encontradoRightText}>Cidade</Text>
                  <Text style={Style.encontradoRightText}>São Paulo SP</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
