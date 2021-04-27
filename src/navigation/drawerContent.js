import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Style from "../style/style";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export function DrawerContent(props) {
  const [search, setSearch] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View style={Style.drawerContent}>
        <DrawerContentScrollView {...props}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={Style.circleDraw}>
              <TouchableOpacity
                style={Style.circle2}
                title="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 14,
                marginTop: 55,
                marginRight: 30,
                marginLeft: 15,
                fontFamily: "bariol_regular",
              }}
            >
              Bem vindo, Emerson!
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={Style.drawerBox}>
              <TextInput
                style={Style.textBoxDraw}
                onChangeText={(text) => setSearch(text)}
                value={search}
                placeholderTextColor="#fff"
                autoCapitalize="words"
                placeholder="Buscar..."
              />
            </View>
          </View>
          <View style={{ marginTop: 30 }} />
          <DrawerItem
            labelStyle={{
              color: "white",
              fontSize: 26,
              fontFamily: "bariol_regular",
            }}
            label="Início"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              fontSize: 26,
              fontFamily: "bariol_regular",
            }}
            label="Condutores"
            onPress={() => {
              props.navigation.navigate("Condutores");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              fontSize: 26,
              fontFamily: "bariol_regular",
            }}
            label="Mapa"
            onPress={() => {
              props.navigation.navigate("Gps");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              fontSize: 26,
              fontFamily: "bariol_regular",
            }}
            label="Configurações"
            onPress={() => {
              props.navigation.navigate("Configuracoes");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              fontSize: 26,
              fontFamily: "bariol_regular",
            }}
            label="Pagamentos"
            onPress={() => {
              props.navigation.navigate("Pagamentos");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              fontSize: 26,
              fontFamily: "bariol_regular",
            }}
            label="Sobre"
            onPress={() => {
              props.navigation.navigate("Sobre");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              fontSize: 26,
              fontFamily: "bariol_regular",
            }}
            label="Contato"
            onPress={() => {
              props.navigation.navigate("Contato");
            }}
          />
        </DrawerContentScrollView>
      </View>
      <View style={{backgroundColor: '#0038d9',}}>
        <View style={{backgroundColor: "rgba(255,255,255,0.25)",}}>
        <DrawerItem
          labelStyle={{fontSize: 20, color: 'white', fontFamily: 'bariol_regular', }}
          label="↩ Sair"
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        />
      </View>
      </View>
    </View>
  );
}
