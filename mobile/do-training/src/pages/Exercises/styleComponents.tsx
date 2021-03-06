import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #f3f3f3;
`;

export const Content = styled.ScrollView`
`;

export const ContainerExercises = styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,   
    },
}))`
`;

export const ContentTraining = styled.View`
    flex-direction: row;
`;

export const Training = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 15px 5px;
    background: #ccc;
`;

export const ImgBackgroundTrainingA = styled.ImageBackground`
    flex: 1;
    width: 100px;
    resize-mode: cover;
    justify-content: center;
    align-items: center;
`;
export const ImgBackgroundTrainingB = styled.ImageBackground`
    flex: 1;
    width: 100px;
    resize-mode: cover;
    justify-content: center;
    align-items: center;
`;
export const ImgBackgroundTrainingC = styled.ImageBackground`
    flex: 1;
    width: 100px;
    resize-mode: cover;
    justify-content: center;
    align-items: center;
`;
export const ImgBackgroundTrainingD = styled.ImageBackground`
    flex: 1;
    width: 100px;
    resize-mode: cover;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 18px;
    font-family: 'Poppins_700Bold';
    color: #fff;
`;

export const SetUpWorkout = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ButtonConfig = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 350px;
    height: 100px;
    border-radius: 10px;
    background-color: #171717;
`;
