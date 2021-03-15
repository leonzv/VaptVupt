import * as React from "react";
import "react-native-gesture-handler";
import Login from "../views/login";
import Home from "../views/home";
import Cadastro from "../views/cadastro";
import LoadHome from "../views/loadHome";
import Gps from "../views/mapview";
import Condutores from "../views/condutores";
import Contato from "../views/contato";
import Pagamentos from "../views/pagamentos";
import Configuracoes from "../views/configuracoes";
import Sobre from "../views/sobre";
import Chamar from "../views/chamar";
import Conclusao from "../views/conclusao";
import Dashboard from "../views/dashboard";
import CadastroConfirm from "../views/cadastroConfirm";
import LoginConfirm from "../views/loginConfirm";
import EditarDados from "../views/editarDados";
import EnderecosList from "../views/enderecosList";
import Mensagem from "../views/mensagem";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { startClock } from "react-native-reanimated";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const StackDrawer = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "#00298F",
        width: 320,
      }}
      drawerContentOptions={{
        activeTintColor: "#00298F",
        activeBackgroundColor: "#00298F",
        inactiveTintColor: "#00298F",
        inactiveBackgroundColor: "#00298F",
        labelStyle: {
          marginLeft: 5,
          color: "#fff",
          fontSize: 24,
        },
      }}
    >
      <Drawer.Screen name="Pagina Inicial" component={MainStackNavigator} />
      <Drawer.Screen name="Condutores" component={Condutores} />
      <Drawer.Screen name="Mapa" component={Gps} />
      <Drawer.Screen name="Configurações" component={Configuracoes} />
      <Drawer.Screen name="Pagamentos" component={Pagamentos} />
      <Drawer.Screen name="Contato" component={Contato} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Conclusao" component={Conclusao} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Mensagem" component={Mensagem} />
      <Drawer.Screen name="Sair" component={LoginStackNavigator} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();
Stack.Navigator.defaultProps = {
  headerMode: "none",
};

const MainStackNavigator = () => {
  return (  
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoadHome" component={LoadHome} />
        <Stack.Screen name="Gps" component={Gps} />
        <Stack.Screen name="Condutores" component={Condutores} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Pagamentos" component={Pagamentos} />
        <Stack.Screen name="Chamar" component={Chamar} />
        <Stack.Screen name="Conclusao" component={Conclusao} />
        <Stack.Screen name="EditarDados" component={EditarDados} />
        <Stack.Screen name="EnderecosList" component={EnderecosList} />
        <Stack.Screen name="Mensagem" component={Mensagem} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
  );
}
 
const LoginStackNavigator = () => {
    return(
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={MainStackNavigator} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroConfirm" component={CadastroConfirm} />
        <Stack.Screen name="LoginConfirm" component={LoginConfirm} />
    </Stack.Navigator>
    )
}

export { MainStackNavigator, LoginStackNavigator, StackDrawer}