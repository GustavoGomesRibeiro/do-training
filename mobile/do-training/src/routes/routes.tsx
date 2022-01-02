import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootParamsList } from '../rootParamsListRoutes/ListRoutes';  

import Home from '../pages/Home/index';
import Exercises from '../pages/Exercises/index';
import Calculator from '../pages/Calculator/index';

const Stack = createStackNavigator<RootParamsList>();

export default function UserRouter(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Exercises" component={Exercises}/>
            <Stack.Screen name="Calculator" component={Calculator}/>
        </Stack.Navigator>
    );
}