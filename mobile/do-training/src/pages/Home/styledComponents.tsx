import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #000;
`;

export const Context = styled.ScrollView`
`;

export const MainContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
`;

export const Exercises = styled.View`
  width: 350px;
  height: 100px;
  background: #ccc;
  margin: 10px 0px;
  border-radius: 10px;
`;

export const ImgBackgroundExercises = styled.ImageBackground`
   flex: 1;
   width: 350px;
   resize-mode: cover;
   justify-content: center;
`;

export const ImgBackgroundCalculator = styled.ImageBackground`
   flex: 1;
   width: 350px;
   resize-mode: cover;
   justify-content: center;
`;

export const Calculator = styled.View`
  width: 350px;
  height: 100px;
  background: #ccc;
  margin: 10px 0px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  margin-left: 20px;
  color: #fff;
  font-size: 26px;
  font-family: "Poppins_700Bold";
`;

