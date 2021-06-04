import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { StackDrawer } from "./src/navigation/stackNavigator";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { View, ActivityIndicator } from "react-native";
import {FontProvider} from "./src/contexts/FontContext";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const scheme = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" style={{width: '35%', height: '35%'}}/>
      </View>
    );
  }

  return (
    <AppearanceProvider>
      <FontProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <StackDrawer /> 
      </NavigationContainer>
      </FontProvider>
    </AppearanceProvider>
  );
}
