import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Style from "../style/style";

export default function EnderecosList(props) {
  const {goBack} = props.navigation;
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
          <Text style={Style.textCircle}>Bem vindo, Usuário!</Text>
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
      <Text
        style={{
          fontSize: 22,
          marginLeft: 30,
          textAlign: "left",
          marginRight: 90,
          marginTop: 60,
          color: "#000",
          marginBottom: 30,
          fontFamily: "bariol_regular",
        }}
      >
        {" "}
        Lista de endereços{" "}
      </Text>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 30 }}>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity
              style={Style.enderecoListBtn}
              onPress={() => props.navigation.navigate("MaisFavoritos")}
            >
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satéliteeeeeeeeeee
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélitee
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}>
              <Text style={Style.enderecoListText}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ justifyContent: "flex-end", flex: 1, maxHeight: 80 }}>
        <TouchableOpacity style={Style.greenPag}
        onPress={() => goBack('B')}>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              alignSelf: "center",
              textAlign: "center",
              fontFamily: "bariol_regular",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
