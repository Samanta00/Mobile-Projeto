import React from 'react';
import Menu from '../src/menu';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator, Screen , Stack} = createNativeStackNavigator()


export default function Rotas() {
  return (
   
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Menu" component={Menu} />
          </Stack.Navigator>
        </NavigationContainer>
    
  );
};

