import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Index from './index';
import Menu from '../src/menu';
import { Text,View } from 'react-native';

const  Stack = createStackNavigator()


export default function Rotas() {
  return (
  <NavigationContainer >
      <Stack.Navigator initialRouteName="Menu">
           <Stack.Screen name="Menu" component={Menu}/>
      </Stack.Navigator>
  </NavigationContainer>
    
  );
};

