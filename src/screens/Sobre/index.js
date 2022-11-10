import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { useFonts, 
    Inter_900Black, 
    Inter_400Regular, 
    Inter_600SemiBold,
    Inter_700Bold,
} from '@expo-google-fonts/inter';

import getMonthName from '../../utils/getMonthName';

export default function Sobre({ navigation }) {

    let [fontsLoaded] = useFonts({
        Inter_900Black,
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
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
        color:'white',
        textAlign: "center",
        fontFamily: 'Inter_900Black',
        marginTop:'30%',
    },
    text: {
        fontSize: 17,
        marginBottom: 15,
        textAlign: "center",
        marginTop:'18%',
        fontFamily: 'Inter_400Regular',
        color:'white',
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