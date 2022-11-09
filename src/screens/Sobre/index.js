import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { useFonts } from 'expo-font';

import getMonthName from '../../utils/getMonthName';

export default function Sobre({ navigation }) {

            const[fontsLoaded]=useFonts({
            'KolkerBrush-Regular':require('../../../assets/Kolker_Brush'),
         });

    return (


        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../../../assets/angelical.jpg')}>

            <Text style={styles.title}>Bem vindo ao mês de {getMonthName()}</Text>
            <Text style={styles.text}>
                {' '}
                Esse Calendário foi feito para a visualização de todos os Meses que são represantádos com alguma Condição crônica.
              
            </Text>
            <TouchableOpacity
                style={styles.button}
                title="Saber mais"
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.textoBotao}>Saber mais</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image:{
        flex:1,
        resizeMode:"cover"
    },
    title: {
        fontSize: 21,
        marginBottom: 20,
        fontWeight: "bold",
        color:'white',
        fontFamily:"KolkerBrush-Regular",
        textAlign: "center",
        marginTop:'30%'

    },
    text: {
        fontSize: 17,
        marginBottom: 15,
        textAlign: "center",
        marginTop:'23%'

    },
    button: {
        marginTop: 20,
        padding: 10,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#2b83ba',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginTop:'20%',
        
        
    },
    textoBotao:{
        color:'white',
        textAlign:"center"

    },
});