import "react-native-gesture-handler";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import Style from "../style/style";
import React, { useState } from "react";

export default function Chamar({ navigation }, props) {
  const [endereco, setEndereco] = useState("");
  const [mercadoria, setMercadoria] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  return (
    <View style={Style.container}>
      <View style={{ flexDirection: "row",}}>
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
            alignSelf: "center",
            resizeMode: "contain",
            width: 80,
            marginLeft: '20%',
            marginRight: 30,
            flex: 1,
            top: 12,
          }}
          source={require("../assets/img/vai-vex-logo.png")}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            textAlign: "left",
            marginLeft: 25,
            marginVertical: 15,
            fontFamily: "bariol_regular",
          }}
        >
          {" "}
          Chamar um motoboy{" "}
        </Text>
        <View style={Style.textBoxChamar}>
          <Text style={Style.textBoxFontCadastro}>Endereço de entrega:</Text>
          <TextInput
            style={Style.textBoxFontChamar}
            onChangeText={(text) => setEndereco(text)}
            value={endereco}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.textBoxChamar}>
          <Text style={Style.textBoxFontCadastro}>Tipo de mercadoria:</Text>
          <TextInput
            style={Style.textBoxFontChamar}
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
      <View style={{flexDirection: "row", alignItems: 'center', }}>
        <TouchableOpacity
          style={[Style.buttonLeft, Style.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={Style.textStyle}>Gravar Endereço</Text>
        </TouchableOpacity>
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
              <View style={Style.modalViewChamar}>
                <Text style={Style.modalText}>Gravar o seguinte endereço:</Text>
                <Text style={Style.enderecoStyle}>
                  {endereco}
                </Text>
                <View style={{justifyContent: 'flex-end', flex: 1,}}>
                <TouchableOpacity
                  style={[Style.button, Style.buttonCloseChamar]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={Style.textStyleClose}>OK</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            style={[Style.buttonRight, Style.buttonOpen]}
            onPress={() => setModalVisible1(true)}
          >
            <Text style={Style.textStyle}>Agendar Entrega</Text>
          </TouchableOpacity>
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
            <View style={Style.modalViewChamar}>
              <Text style={Style.modalText}>Agendar Entrega</Text>
              <View style={{justifyContent: 'flex-end', flex: 1,}}>
                <TouchableOpacity
                  style={[Style.button, Style.buttonCloseChamar]}
                  onPress={() => setModalVisible1(!modalVisible1)}
                >
                  <Text style={Style.textStyleClose}>OK</Text>
                </TouchableOpacity>
                </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <TouchableOpacity style={Style.greenBtn}
      onPress={() => navigation.navigate("Gps")}>
        <Text style={Style.motoboyText}>Chamar Motoboy</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
