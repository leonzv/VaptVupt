import "react-native-gesture-handler";
import { View, Text, Animated } from "react-native";
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

export default function LoadHome(props) {
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
    props.navigation.navigate("Home");
  }

  return (
    <View style={Style.containerLoad}>
      <View style={Style.blueCircle}>
        <View style={Style.redCircle}>
          <Text style={Style.porcentagemLoad}> {progress}% </Text>
        </View>
      </View>
      <Text style={Style.textLoad}>
        {" "}
        Aguarde enquanto preparamos tudo para você! :)
      </Text>
    </View>
  );
}
