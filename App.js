import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//ReactNavigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Home from './src/screens/Home'
import Sobre from './src/screens/Sobre'
import TesteMeses from '../projeto-mobile/src/screens/meses/mes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sobre">
        <Stack.Screen name="Home" component={Home} props={TesteMeses}/>
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Menu" component={TesteMeses} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}