import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Button, ScrollView, Text, View } from "react-native";
import Rotas from "./Routes";



function Lalalala({navigation}){
    return(
        <View>
               <Text>Bem Vindos</Text>

               <Button title="teste" onPress={()=> navigation.navigate('Menu') }>

               </Button>
        </View>
    )
}

module.exports=Lalalala