import * as React from 'react';
import 'react-native-gesture-handler';
import Login from './views/login';
import Home from './views/home';
import Cadastro from './views/cadastro';
import Loading from './views/loading'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};


function Stackers() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Loading" component={Loading}/>
      </Stack.Navigator>
  );
}

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

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator 
      drawerStyle={{
      backgroundColor: '#00298F',
      width: 320,
      }}
      drawerContentOptions={{
          activeTintColor: '#00298F',
          activeBackgroundColor: '#00298F',
          inactiveTintColor: '#00298F',
          inactiveBackgroundColor: '#00298F',
          labelStyle:{
            marginLeft: 5,
            color: '#fff',
            fontSize: 24,
          }
        }}>
      
        <Drawer.Screen name="Página Inicial" component={Stackers} />
        <Drawer.Screen name="Sair" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}