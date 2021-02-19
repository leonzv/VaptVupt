import "react-native-gesture-handler";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import Style from "../style/style";
import React, { useState } from "react";

export default function Chamar(props) {
  const [endereco, setEndereco] = useState("");
  const [mercadoria, setMercadoria] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  return (
    <View style={Style.container}>
      <View style={{ flexDirection: "row" }}>
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
            alignSelf: "flex-end",
            resizeMode: "contain",
            width: 80,
            marginRight: '10%',
            bottom: 20,
          }}
          source={require("../img/vai-vex-logo.png")}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            textAlign: "left",
            marginLeft: 25,
            marginVertical: 15,
          }}
        >
          {" "}
          Chamar um motoboy{" "}
        </Text>
        <View style={Style.textBoxChamar}>
          <Text style={Style.textBoxFontCadastro}>Endereço de entrega:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setEndereco(text)}
            value={endereco}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.textBoxChamar}>
          <Text style={Style.textBoxFontCadastro}>Tipo de mercadoria:</Text>
          <TextInput
            style={Style.textBoxFont}
            onChangeText={(text) => setMercadoria(text)}
            value={mercadoria}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.blackLineHorizontal} />
        <View style={Style.textBoxGuardar}>
          <Text style={Style.textBoxFontCadastro}>{endereco}</Text>
        </View>
        <View style={Style.textBoxGuardar}>
          <Text style={Style.textBoxFontCadastro}>{mercadoria}</Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "white", flexDirection: "row" }}>
        <Pressable
          style={[Style.buttonLeft, Style.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={Style.textStyle}>Gravar Endereço</Text>
        </Pressable>
        <View style={Style.centeredView}>
          <Modal //começo modal gravar
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={Style.centeredView}>
              <View style={Style.modalView}>
                <Text style={Style.modalText}>Gravar o seguinte endereço:</Text>
                <Text style={Style.enderecoStyle}>
                  Rua Arlindo, 654, Jd Toca do tatu
                </Text>
                <Pressable
                  style={[Style.button, Style.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={Style.textStyleClose}>OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[Style.buttonRight, Style.buttonOpen]}
            onPress={() => setModalVisible1(true)}
          >
            <Text style={Style.textStyle}>Agendar Entrega</Text>
          </Pressable>
        </View>
        <Modal //começo modal entrega
          animationType='slide'
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={Style.centeredView}>
            <View style={Style.modalView}>
              <Text style={Style.modalText}>Agendar Entrega</Text>
              <Pressable
                style={[Style.button, Style.buttonClose]}
                onPress={() => setModalVisible1(!modalVisible1)}
              >
                <Text style={Style.textStyleClose}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity style={Style.greenBtn}>
        <Text style={Style.motoboyText}>Chamar Motoboy</Text>
      </TouchableOpacity>
    </View>
  );
}
