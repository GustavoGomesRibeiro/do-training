import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootParamsList } from '../rootParamsListRoutes/ListRoutes';  

import Home from '../pages/Home/index';
import Exercises from '../pages/Exercises/index';
import Calculator from '../pages/Calculator/index';
import Training from '../pages/LayoutPartials/Training/index';


const Stack = createStackNavigator<RootParamsList>();

export default function UserRouter(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: "Tela Inicial"}}/>
            <Stack.Screen name="Exercises" component={Exercises} options={{title: "Exercícios"}}/>
            <Stack.Screen name="Calculator" component={Calculator} options={{title: "Calculadora"}}/>
            <Stack.Screen name="Training" component={Training} options={{title: "Exercícios treino A"}}/>
        </Stack.Navigator>
    );
}