import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from '../style/style';
import Swiper from 'react-native-swiper';

export default function Home({navigation}, props) {
  return (
    <View style={Style.container}>
    <View style={{flexDirection: 'row',}}>
      <TouchableOpacity style={Style.circle}>
            <TouchableOpacity style={Style.circle2} 
            title="Toggle drawer" onPress={() => navigation.toggleDrawer()}/>
          </TouchableOpacity>
      <Text style={Style.textCircle}>Bem vindo, Emerson!</Text>
      <Image
      style={{
      alignSelf:'flex-end', 
      resizeMode:'contain', 
      width: 80, 
      marginRight: 18.5,
      bottom: 20,}}
      source={require('../img/vai-vex-logo.png')}
      />
    </View>
    <Text style={{
    fontSize: 22,
    marginLeft: 30,
    textAlign: 'left',
    marginRight: 90,
    marginTop: 60,
    color: '#000'}}> Escolha o serviço desejado abaixo</Text>
    <Swiper style={Style.wrapper} loop={true}>
    <View style={Style.retanguloAzulHome}>
    <Image
          style={Style.imgHome}
          source={require('../img/bicicleta.png')}
    />
    <Text style={Style.textRetanguloHome}> Bicicleta</Text>
    </View>
    <View style={Style.retanguloAzulHome}>
    <Image
          style={Style.imgHome}
          source={require('../img/dinheiro.png')}
    />
    <Text style={Style.textRetanguloHome}> Carro</Text>
    </View>
    <View style={Style.retanguloAzulHome}>
    <Image
          style={Style.imgHome}
          source={require('../img/dinheiro.png')}
    />
    <Text style={Style.textRetanguloHome}> Carro</Text>
    </View>
    <View style={Style.retanguloAzulHome}>
    <Image
          style={Style.imgHome}
          source={require('../img/dinheiro.png')}
    />
    <Text style={Style.textRetanguloHome}>Carro</Text>
    </View>
    </Swiper> 
    <View>
    <Text
    style={{
    fontSize: 22,
    marginLeft: 30,
    textAlign: 'left',
    marginRight: 90,
    color: '#000',
    marginBottom: 5,}}>
    Corridas
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
              onPress={() => navigation.navigate('Login')}>
              <Text style={Style.btnAdminFont}> Ir para o admin </Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
  );
}
