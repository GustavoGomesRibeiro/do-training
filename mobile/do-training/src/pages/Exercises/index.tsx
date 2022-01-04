import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamsList } from '../../rootParamsListRoutes/ListRoutes';  

import { 
    Container, 
    Content,
    ContainerExercises, 
    ContentTraining, 
    Training,
    Text,
    ImgBackgroundTrainingA,
    ImgBackgroundTrainingB,
    ImgBackgroundTrainingC,
    ImgBackgroundTrainingD,
    SetUpWorkout,
    ButtonConfig
} from './styleComponents';

import chest from '../../assets/img/chest.jpg';
import legs from '../../assets/img/legs.jpg';
import biceps from '../../assets/img/biceps.jpg';
import shoulder from '../../assets/img/shoulder.jpg';

export default function Exercises() {

    type ReciveScreens = StackNavigationProp<RootParamsList, 'Training'>

    const navigation = useNavigation<ReciveScreens>();

    return (
        <Container>
            <Content>
                <ContainerExercises>
                    <ContentTraining>
                        <Training>
                            <ImgBackgroundTrainingA source={chest} imageStyle={{ borderRadius: 10}}>
                                <Text> Treino A</Text>
                                {/* <Text> Treino A(Peito e tricipes, parte frente ombro)</Text> */}
                            </ImgBackgroundTrainingA>
                        </Training>

                        <Training>
                            <ImgBackgroundTrainingB source={legs} imageStyle={{ borderRadius: 10}}>
                                <Text> Treino B </Text>
                                {/* <Text> Treino B (Perna)</Text> */}
                            </ImgBackgroundTrainingB>
                        </Training>

                        <Training>
                            <ImgBackgroundTrainingC source={biceps} imageStyle={{ borderRadius: 10}}>
                                <Text> Treino C </Text>
                                {/* <Text> Treino C (Costas, bicps e parte de traz ombro)</Text> */}
                            </ImgBackgroundTrainingC>
                        </Training>

                        <Training>
                            <ImgBackgroundTrainingD source={shoulder} imageStyle={{ borderRadius: 10}}>
                                <Text> Treino D </Text>
                                {/* <Text> Treino D (Ombro completo)</Text> */}
                            </ImgBackgroundTrainingD>
                        </Training>
                    </ContentTraining>
                </ContainerExercises>

                <SetUpWorkout>
                    <ButtonConfig onPress={() => navigation.navigate('Training')}>
                        <Text>Montar treinos A</Text>
                    </ButtonConfig>
                    <ButtonConfig>
                        <Text>Montar treinos B</Text>
                    </ButtonConfig>
                    <ButtonConfig>
                        <Text>Montar treinos C</Text>
                    </ButtonConfig>
                    <ButtonConfig>
                        <Text>Montar treinos D</Text>
                    </ButtonConfig>
                </SetUpWorkout>
                
            </Content>
        </Container>
    );
}