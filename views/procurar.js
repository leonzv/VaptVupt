import "react-native-gesture-handler";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import Style from "../style/style";
import React, { useRef, useState, useEffect } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // lembrar o ultimo callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // configurar o intervalo.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function Procurar(props) {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    // atualizar até 100
    if (progress < 100) {
      setProgress(progress + 25);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
    }).start();
  }, [progress]);

  if (progress === 100) {
    props.navigation.navigate("Chamar");
  }

  return (
    <View style={Style.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={Style.circle}
          onPress={() => props.navigation.navigate("Chamar")} //mudar isso depois
        >
          <TouchableOpacity style={Style.circle2} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={Style.blueCircle}>
          <View style={Style.redCircle}>
            <Text style={Style.circleText}> Buscando um motoboy...</Text>
          </View>
        </View>
      </View>
      <View style={Style.procurarContainer}>
        <View style={Style.procurarBox}>
          <Text style={Style.procurarFont}> Endereço de partida: </Text>
          <View style={Style.whiteLineHorizontal} />
          <Text style={Style.procurarFont}> Endereço de entrega: </Text>
        </View>
        <View style={Style.procurarBox2}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={Style.circleProcurar}>
              <TouchableOpacity style={Style.circle2Procurar} />
            </TouchableOpacity>
            <Text style={Style.nameText}> Ruan Motoboy </Text>
            <View style={Style.whiteLineVertical} />
            <View style={{ flexDirection: "column" }}>
              <Text style={Style.horarioFont}>13:36</Text>
              <Text style={Style.horarioFont1}>Horário do Pedido</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={Style.horarioFont}>14:36</Text>
              <Text style={Style.horarioFont1}>Horario da Entrega</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
