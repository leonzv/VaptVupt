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
import { DrawerContent } from './drawerContent';
import MaisFavoritos from "../views/maisFavoritos";
const Drawer = createDrawerNavigator();


const StackDrawer = () => {
  return (
    <Drawer.Navigator
    drawerStyle={{ width: '75%' }}
    drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Pagina Inicial" component={MainStackNavigator} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="Login" component={Login} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="Cadastro" component={Cadastro} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="CadastroConfirm" component={CadastroConfirm} />
      <Drawer.Screen options={{ swipeEnabled: false }} name="LoginConfirm" component={LoginConfirm} />
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="CadastroConfirm" component={CadastroConfirm} />
        <Stack.Screen name="LoginConfirm" component={LoginConfirm} />
        <Stack.Screen name="MaisFavoritos" component={MaisFavoritos} />
      </Stack.Navigator>
  );
}

export { MainStackNavigator, StackDrawer}