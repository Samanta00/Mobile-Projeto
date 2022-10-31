import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";



export default function Menu({navigation}){

    return(
        <View>
            
            <Button title="M" onPress={() => navigation.navigate('Index') }/>
        </View>
    )
}


