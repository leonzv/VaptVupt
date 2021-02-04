import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, Image} from 'react-native';
import Style from '../style/style';

export default function Cadastro(props) {
  return (
    <View style={Style.container}>
    <View>
    <Image
          style={Style.vaiVexImg}
          source={require('../img/vai-vex-logo.png')}
    />
    <Text style={{
    marginLeft: 30, 
    marginTop: 20, 
    fontSize: 20, 
    fontWeight: 'bold',}}>Preencha o forumário completo:</Text>
    </View>
    <View style={Style.textBox}><Text style={Style.textBoxFont}>Nome:</Text></View>
    <View style={Style.textBox}><Text style={Style.textBoxFont}>Sobrenome:</Text></View>
    <View style={Style.textBox}><Text style={Style.textBoxFont}>CPF/CNPJ::</Text></View>
    <View style={Style.textBox}><Text style={Style.textBoxFont}>Endereço:</Text></View>
    <View style={Style.box3070}>
    <View style={Style.textBox30}><Text style={Style.textBoxFont}>Nº:</Text></View>
    <View style={Style.textBox70}><Text style={Style.textBoxFont}>Bairro:</Text></View>
    </View>
    <View style={Style.box3070}>
    <View style={Style.textBox30}><Text style={Style.textBoxFont}>UF:</Text></View>
    <View style={Style.textBox70}><Text style={Style.textBoxFont}>Cidade:</Text></View>
    </View>
    <View style={Style.textBox}><Text style={Style.textBoxFont}>País:</Text></View>
    <View style={Style.textBox}><Text style={Style.textBoxFont}>CEP:</Text></View>
    </View>
  );
}
