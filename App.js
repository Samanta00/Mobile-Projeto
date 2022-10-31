import React from "react";
import Menu from "./src/menu";
import Index from "./routes";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const  Stack = createStackNavigator()

export default function App() {   

           return (
          <NavigationContainer >
                      <Stack.Navigator initialRouteName="Menu">
                          <Stack.Screen name="Menu" component={Menu}/>
                          <Stack.Screen name="Index" component={Index}/>
                    </Stack.Navigator>
          </NavigationContainer>
    
  );
  

}


