import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { StackDrawer } from "./src/navigation/stackNavigator";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

export default function App() {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <StackDrawer />
      </NavigationContainer>
    </AppearanceProvider>
  );
}
