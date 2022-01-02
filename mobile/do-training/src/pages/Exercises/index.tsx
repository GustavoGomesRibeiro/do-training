import React from 'react';
import { 
    Container, 
    ContainerExercises, 
    ContentTraining, 
    Training,
    Text,
    ImgBackgroundTrainingA,
    ImgBackgroundTrainingB,
    ImgBackgroundTrainingC,
    ImgBackgroundTrainingD
} from './styleComponents';

import chest from '../../assets/img/chest.jpg';
import legs from '../../assets/img/legs.jpg';
import biceps from '../../assets/img/biceps.jpg';
import shoulder from '../../assets/img/shoulder.jpg';

export default function Exercises() {

    return (
        <Container>
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
        </Container>
    );
}