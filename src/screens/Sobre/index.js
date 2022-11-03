import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import getMonthName from '../../utils/getMonthName';

export default function Sobre({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao mês de {getMonthName()}</Text>
            <Text style={styles.text}>
                {' '}
                Lorem ipsum mi nam feugiat velit fringilla faucibus sed, posuere taciti
                enim pellentesque gravida vehicula laoreet conubia torquent, quisque hac
                senectus dui adipiscing donec ut. mattis bibendum netus pretium
                consectetur consequat eros at blandit, dapibus a mattis enim porttitor
                in ultricies, etiam platea et tristique torquent fames nostra at, nisi
                curabitur hendrerit laoreet senectus ante. ultricies duis conubia
                venenatis risus class fames sociosqu mattis, vivamus elementum turpis
                hendrerit vitae rutrum sodales cubilia, pharetra eget curae a tincidunt
                varius diam. ultricies a consectetur elementum viverra id orci luctus,
                quisque rhoncus curabitur morbi senectus non, dictumst inceptos quisque
                est tempor mauris.
            </Text>
            <TouchableOpacity
                style={styles.button}
                title="Saber mais"
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={{color:'#ffffff'}}>Saber mais</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    text: {
        fontSize: 17,
        marginBottom: 15,
        textAlign: 'center'
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
        marginVertical: 6
    },
});