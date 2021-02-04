import 'react-native-gesture-handler';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Style from '../style/style';
import * as React from 'react';


export default function Loading(props) {
  return (
    <View style={Style.containerLoad}>
        <View style={Style.blueCircle}>
            <View style={Style.redCircle}><Text style={Style.porcentagemLoad}> 32% </Text></View>
        </View>
        <Text style={Style.textLoad}> Aguarde enquanto preparamos tudo para você! :)</Text>
    </View>
  );
}
