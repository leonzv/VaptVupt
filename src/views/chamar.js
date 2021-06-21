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
import {CustomText} from '../components/CustomText';

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
              onPress={() => props.navigation.toggleDrawer()}
            />
          </TouchableOpacity>
          <CustomText fontType="body3" style={Style.textCircle}>Bem vindo, Usuário!</CustomText>
          <Image
            style={{
              alignSelf: "center",
              resizeMode: "contain",
              width: 220,
              height: 80,
              marginLeft: '5%',
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
            marginVertical: 25,
            fontFamily: "bariol_regular",
          }}
        >
          {" "}
          Chamar um motoboy{" "}
        </Text>
        <View style={Style.textBoxChamar}>
          <CustomText fontType="body3" style={Style.textBoxFontCadastro}>Endereço de entrega:</CustomText>
          <TextInput
            style={Style.textBoxFontChamar}
            onChangeText={(text) => setEndereco(text)}
            value={endereco}
            placeholderTextColor="#fff"
            autoCapitalize="words"
          />
        </View>
        <View style={Style.textBoxChamar}>
          <CustomText fontType="body3" style={Style.textBoxFontCadastro}>Tipo de mercadoria:</CustomText>
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
          <CustomText fontType="body3" style={Style.textBoxFontCadastro}>{endereco}</CustomText>
        </View>
        <View style={Style.textBoxGuardar}>
          <CustomText fontType="body3" style={Style.textBoxFontCadastro}>{mercadoria}</CustomText>
        </View>
      </View>
      <View style={{flexDirection: "row", alignItems: 'center', }}>
        <TouchableOpacity
          style={[Style.buttonLeft, Style.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <CustomText fontType="body3" style={Style.textStyle}>Gravar Endereço</CustomText>
        </TouchableOpacity>
        <View style={Style.centeredView}>
          <Modal //começo modal gravar
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
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
            <CustomText fontType="body3" style={Style.textStyle}>Agendar Entrega</CustomText>
          </TouchableOpacity>
        </View>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
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
                  <CustomText fontType="body2" style={Style.textStyleClose}>OK</CustomText>
                </TouchableOpacity>
                </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <TouchableOpacity style={Style.greenBtn}
      onPress={() => props.navigation.navigate("Gps")}>
        <CustomText fonttType="body2" style={Style.motoboyText}>Chamar Motoboy</CustomText>
      </TouchableOpacity>
      </View>
    </View>
  );
}
