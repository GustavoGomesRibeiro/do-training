import styled from 'styled-components/native';

export const Container = styled.View`
    background: #f3f3f3;
`;

export const Content = styled.ScrollView`
`;

export const Header = styled.View`
    align-items: center;
    margin-top: 20px;
    /* padding-left: 30px; */
`;

export const Description = styled.Text`
    font-size: 18px;
    font-family: Poppins_400Regular;
`;

export const Card = styled.View`
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CardExercises = styled.TouchableOpacity`
`;

export const Exercises = styled.View`
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background: #ccc;
    margin: 10px;
`;

export const Text = styled.Text`  
    /* font-family: Poppins_400Regular; */
`;

export const ContainerLabel = styled.View`
    padding-left: 10px;
`;

export const Label = styled.Text`
    font-family: Poppins_400Regular;
    font-size: 14px;
    /* font-weight: bold; */
`;


