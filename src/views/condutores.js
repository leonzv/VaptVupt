import React from "react";
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Style from "../style/style";
import Swiper from "react-native-swiper";

export default function Condutores({navigation}) {
  const { goBack } = navigation;
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
        <Text style={Style.textCircle}>Bem vindo, Usuário!</Text>
        <Image
          style={{
            alignSelf: "center",
            resizeMode: "contain",
            width: 220,
            height: 80,
            marginLeft: "5%",
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
          marginTop: "6%",
          color: "#000",
          fontFamily: "bariol_regular",
        }}
      >
        {" "}
        Condutores
      </Text>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <Swiper
          style={Style.wrapper}
          loop={false}
          style={Style.wrapper}
          loop={false}
          paginationStyle={{ height: "75%", alignItems: "flex-end", top: 10 }}
          activeDotColor="#0038d9"
          dotStyle={{ width: 45, marginHorizontal: 10, bottom: 50 }}
          activeDotStyle={{ width: 65, marginHorizontal: 10, bottom: 50 }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <View style={Style.bigCircleCond}>
                <View
                  style={Style.bigCircleCond2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  top: 10,
                  alignSelf: "center",
                  marginHorizontal: "18%",
                }}
              >
                <Image
                  style={{ resizeMode: "contain", width: 80, height: 80 }}
                  source={require("../assets/img/bicicletaPreta.png")}
                />
                <Text style={{ fontSize: 20, fontFamily: "bariol_regular" }}>
                  Luiz Silva
                </Text>
                <Text style={{ fontSize: 16, fontFamily: "bariol_regular" }}>
                  Bicicleta
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-around",
                marginTop: 15,
              }}
            >
              <TouchableOpacity style={Style.redBox}>
                <Text style={Style.textCondutorBtn}>Avaliar condutor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.blueBox1}
              onPress={() => navigation.navigate("Mensagem")}
              >
                <Text style={Style.textCondutorBtn}>Mensagem</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.blueBox}>
                <Text style={Style.textCondutorBtn}>Deletar condutor</Text>
              </TouchableOpacity>
            </View>
            <View />
          </View>
          <View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <View style={Style.bigCircleCond}>
                <View
                  style={Style.bigCircleCond2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  top: 10,
                  alignSelf: "center",
                  marginHorizontal: "18%",
                }}
              >
                <Image
                  style={{ resizeMode: "contain", width: 80, height: 80 }}
                  source={require("../assets/img/bicicletaPreta.png")}
                />
                <Text style={{ fontSize: 20, fontFamily: "bariol_regular" }}>
                  Luiz Silva
                </Text>
                <Text style={{ fontSize: 16, fontFamily: "bariol_regular" }}>
                  Bicicleta
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-around",
                marginTop: 15,
              }}
            >
              <TouchableOpacity style={Style.redBox}>
                <Text style={Style.textCondutorBtn}>Avaliar condutor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.blueBox1}
              onPress={() => navigation.navigate("Mensagem")}
              >
                <Text style={Style.textCondutorBtn}>Mensagem</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.blueBox}>
                <Text style={Style.textCondutorBtn}>Deletar condutor</Text>
              </TouchableOpacity>
            </View>
            <View />
          </View>
          </View>
          <View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <View style={Style.bigCircleCond}>
                <View
                  style={Style.bigCircleCond2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  top: 10,
                  alignSelf: "center",
                  marginHorizontal: "18%",
                }}
              >
                <Image
                  style={{ resizeMode: "contain", width: 80, height: 80 }}
                  source={require("../assets/img/bicicletaPreta.png")}
                />
                <Text style={{ fontSize: 20, fontFamily: "bariol_regular" }}>
                  Luiz Silva
                </Text>
                <Text style={{ fontSize: 16, fontFamily: "bariol_regular" }}>
                  Bicicleta
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-around",
                marginTop: 15,
              }}
            >
              <TouchableOpacity style={Style.redBox}>
                <Text style={Style.textCondutorBtn}>Avaliar condutor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.blueBox1}
              onPress={() => navigation.navigate("Mensagem")}
              >
                <Text style={Style.textCondutorBtn}>Mensagem</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.blueBox}>
                <Text style={Style.textCondutorBtn}>Deletar condutor</Text>
              </TouchableOpacity>
            </View>
            <View />
          </View>
          </View>
          <View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2%",
              }}
            >
              <View style={Style.bigCircleCond}>
                <View
                  style={Style.bigCircleCond2}
                  title="Toggle drawer"
                  onPress={() => navigation.toggleDrawer()}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  top: 10,
                  alignSelf: "center",
                  marginHorizontal: "18%",
                }}
              >
                <Image
                  style={{ resizeMode: "contain", width: 80, height: 80 }}
                  source={require("../assets/img/bicicletaPreta.png")}
                />
                <Text style={{ fontSize: 20, fontFamily: "bariol_regular" }}>
                  Luiz Silva
                </Text>
                <Text style={{ fontSize: 16, fontFamily: "bariol_regular" }}>
                  Bicicleta
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-around",
                marginTop: 15,
              }}
            >
              <TouchableOpacity style={Style.redBox}>
                <Text style={Style.textCondutorBtn}>Avaliar condutor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.blueBox1}
              onPress={() => navigation.navigate("Mensagem")}
              >
                <Text style={Style.textCondutorBtn}>Mensagem</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Style.blueBox}>
                <Text style={Style.textCondutorBtn}>Deletar condutor</Text>
              </TouchableOpacity>
            </View>
            <View />
          </View>
          </View>
        </Swiper>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 30,
            textAlign: "left",
            marginRight: 90,
            color: "#000",
            fontFamily: "bariol_regular",
          }}
        >
          Corridas deste condutor
        </Text>

        <View style={Style.grayBox}>
          <View>
            <Text style={Style.grayBoxBigText}>25</Text>
            <Text style={Style.grayBoxSmallText}>Entregas</Text>
            <Text style={Style.grayBoxSmallText}>Realizadas</Text>
          </View>
          <View>
            <Text style={Style.grayBoxBigText}>25</Text>
            <Text style={Style.grayBoxSmallText}>Pedidos</Text>
            <Text style={Style.grayBoxSmallText}>Realizados</Text>
          </View>
          <TouchableOpacity
            style={Style.btnAdmin}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={Style.btnAdminFont}> Ir para o admin </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={Style.greenPag} onPress={() => goBack("B")}>
        <Text
          style={{
            fontSize: 20,
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
  );
}
