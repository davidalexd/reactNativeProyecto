import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';

export default function Home({navigation}){
    return(
    <View>
        <Text>Hola soy el Home</Text>
        <TouchableHighlight onPress={()=>navigation.navigate('Services')}>
            <Text>Ir a la libreria</Text>
        </TouchableHighlight>
    </View>
    );
}