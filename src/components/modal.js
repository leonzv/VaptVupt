import React,  {useState} from "react";
import { Text, View, Modal, TouchableOpacity, } from "react-native";
import Style from "../style/style";



export default function modal({ navigation }) {

  function switchModal() {
    if (modalVisible == true) {
      setModalVisible(!modalVisible);
      setModalVisible1(!modalVisible1);
    }
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  return (
    <View>
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
      {/* fim do primeiro modal */}
      <View>
        <TouchableOpacity
          style={[Style.button, Style.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={Style.maisFav}>Escolher condutor favorito</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: "90%",
                alignSelf: "center",
              }}
            >
              <View style={Style.circleFav}>
                <View
                  style={Style.circle2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Text style={Style.modalFavText}>Luiz Silva</Text>
                <Text style={Style.modalFavText}>Motoboy</Text>
              </View>
              <View style={Style.escolherView}>
                <TouchableOpacity
                  style={Style.btnModalFav}
                  onPress={() => switchModal()}
                >
                  <Text style={Style.btnModalText}>Escolher</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: "90%",
                alignSelf: "center",
              }}
            >
              <View style={Style.circleFav}>
                <View
                  style={Style.circle2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Text style={Style.modalFavText}>Luiz Silva</Text>
                <Text style={Style.modalFavText}>Motoboy</Text>
              </View>
              <View style={Style.escolherView}>
                <TouchableOpacity
                  style={Style.btnModalFav}
                  onPress={() => switchModal()}
                >
                  <Text style={Style.btnModalText}>Escolher</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: "90%",
                alignSelf: "center",
              }}
            >
              <View style={Style.circleFav}>
                <View
                  style={Style.circle2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Text style={Style.modalFavText}>Luiz Silva</Text>
                <Text style={Style.modalFavText}>Motoboy</Text>
              </View>
              <View style={Style.escolherView}>
                <TouchableOpacity
                  style={Style.btnModalFav}
                  onPress={() => switchModal()}
                >
                  <Text style={Style.btnModalText}>Escolher</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: "90%",
                alignSelf: "center",
              }}
            >
              <View style={Style.circleFav}>
                <View
                  style={Style.circle2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{ flexDirection: "column", justifyContent: "center" }}
              >
                <Text style={Style.modalFavText}>Luiz Silva</Text>
                <Text style={Style.modalFavText}>Motoboy</Text>
              </View>
              <View style={Style.escolherView}>
                <TouchableOpacity
                  style={Style.btnModalFav}
                  onPress={() => switchModal()}
                >
                  <Text style={Style.btnModalText}>Escolher</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}
            >
              <TouchableOpacity
                style={Style.fecharBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={Style.fecharText}> Fechar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
