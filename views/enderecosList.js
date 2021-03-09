import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Style from "../style/style";

export default function EnderecosList({ navigation }, props) {
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
            marginRight: 18.5,
            bottom: 20,
          }}
          source={require("../src/assets/img/vai-vex-logo.png")}
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
        }}
      >
        {" "}
        Lista de endereços{" "}
      </Text>
      <View style={{flex: 1,}}>
        <ScrollView style={{marginBottom: 30}}>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
          <View style={Style.enderecoBox}>
            <Text style={Style.enderecoText}>
              Avenida Maracá, 800, Jd Satélite
            </Text>
            <TouchableOpacity style={Style.enderecoListBtn}><Text style={Style.enderecoListText}>Ver mais</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{justifyContent: "flex-end", flex:1, maxHeight: 80, }}>
        <TouchableOpacity style={Style.greenPag}>
          <Text
            style={{
              fontSize: 16,
              color: "white",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
