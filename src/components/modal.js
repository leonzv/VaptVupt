import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
  Touchable,
} from "react-native";
import Style from "../style/style";

export default function modal() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
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
          Alert.alert("Modal has been closed.");
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
                width: '90%',
                alignSelf: 'center',
              }}
            >
              <View style={Style.circleFav}>
                <View
                  style={Style.circle2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View style={{ flexDirection: "column", justifyContent: 'center' }}>
                <Text style={Style.modalFavText}>Luiz Silva</Text>
                <Text style={Style.modalFavText}>Motoboy</Text>
              </View>
              <TouchableOpacity style={Style.btnModalFav}>
                <Text style={Style.btnModalText}>Escolher</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: '90%',
                alignSelf: 'center',
              }}
            >
              <View style={Style.circleFav}>
                <View
                  style={Style.circle2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View style={{ flexDirection: "column", justifyContent: 'center' }}>
                <Text style={Style.modalFavText}>Luiz Silva</Text>
                <Text style={Style.modalFavText}>Motoboy</Text>
              </View>
              <TouchableOpacity style={Style.btnModalFav}>
                <Text style={Style.btnModalText}>Escolher</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: '90%',
                alignSelf: 'center',
              }}
            >
              <View style={Style.circleFav}>
                <View
                  style={Style.circle2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View style={{ flexDirection: "column", justifyContent: 'center' }}>
                <Text style={Style.modalFavText}>Luiz Silva</Text>
                <Text style={Style.modalFavText}>Motoboy</Text>
              </View>
              <TouchableOpacity style={Style.btnModalFav}>
                <Text style={Style.btnModalText}>Escolher</Text>
              </TouchableOpacity>
            </View><View
              style={{
                flexDirection: "row",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                width: '90%',
                alignSelf: 'center',
              }}
            >
              <View style={Style.circleFav}>
                <View
                  style={Style.circle2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View style={{ flexDirection: "column", justifyContent: 'center' }}>
                <Text style={Style.modalFavText}>Luiz Silva</Text>
                <Text style={Style.modalFavText}>Motoboy</Text>
              </View>
              <TouchableOpacity style={Style.btnModalFav}>
                <Text style={Style.btnModalText}>Escolher</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20,}}>
                <TouchableOpacity style={Style.fecharBtn}
                onPress={() => setModalVisible(false)}>
                    <Text style={Style.fecharText}> Fechar </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
