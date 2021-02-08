import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from '../style/style';
import * as React from 'react';

export default function LoadToHome(props) {
    return (
        <View>
            <View style={{flexDirection: 'row',}}>
                <TouchableOpacity style={Style.circle}>
                    <TouchableOpacity style={Style.circle2}/>
                </TouchableOpacity>
            </View>
        <View style={Style.procurarContainer}>
            <View style={Style.procurarBox}>
                <Text style={{fontSize: 12, color: '#fff',}}> Endereço de partida: </Text>
                <Text style={{fontSize: 12, color: '#fff',}}> Endereço de entrega: </Text>
            </View>
            <View style={Style.procurarBox2}>
            <View style={{flexDirection: 'row',}}>
                <TouchableOpacity style={Style.circleProcurar}>
                    <TouchableOpacity style={Style.circle2Procurar}/>
                </TouchableOpacity>
                <Text style={{color: '#fff',}}> Ruan Motoboy </Text>
            </View>
            </View>
        </View>
        </View>
    );
  }
  