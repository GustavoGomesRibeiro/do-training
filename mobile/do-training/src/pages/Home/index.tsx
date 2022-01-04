import React from "react";
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamsList } from '../../rootParamsListRoutes/ListRoutes';  


import workout from '../../assets/img/workout.jpg';
import calculator from '../../assets/img/calculator.jpg';

import { LinearGradient } from 'expo-linear-gradient';

import { 
    Container, 
    Context, 
    MainContent, 
    Button, 
    Exercises, 
    ImgBackgroundExercises,
    ImgBackgroundCalculator,
    Calculator, 
    Text 
} from "./styledComponents";
 

type ReciveScreens = StackNavigationProp<RootParamsList, 'Exercises'>

export default function Home() {

    const navigation = useNavigation<ReciveScreens>();
    
    return(
        <Container>
            <Context>
                <MainContent>
                    <Button onPress={() => navigation.navigate("Exercises")}>
                        <Exercises>
                            <ImgBackgroundExercises source={workout} imageStyle={{ borderRadius: 10}}>
                                <LinearGradient
                                    style={{height: 100, justifyContent: 'center', borderRadius: 10}}
                                    start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 1 }}
                                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.1)']}>
                                        <Text>Exercícios</Text>
                                </LinearGradient>
                            </ImgBackgroundExercises>
                        </Exercises>
                    </Button>
                    
                    <Button onPress={() => navigation.navigate("Calculator")}>
                        <Calculator>
                            <ImgBackgroundCalculator source={calculator} imageStyle={{ borderRadius: 10}}>
                                <LinearGradient
                                    style={{height: 100, justifyContent: 'center', borderRadius: 10}}
                                    start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 1 }}
                                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.1)']}>
                                    <Text>Calculadora</Text>
                                </LinearGradient>
                            </ImgBackgroundCalculator>
                        </Calculator>
                    </Button>
                </MainContent>
            </Context>
        </Container>
    );
}