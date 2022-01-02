import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/routes';

import AppLoading from 'expo-app-loading';
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

export default function App() {

  let [loadedFonts] = useFonts({
    Poppins_400Regular, Poppins_700Bold
  });

    if(!loadedFonts){
      return <AppLoading/>
    } else {
    return (
      <>
        <NavigationContainer>
          <StatusBar style="auto"/>
          <Router/>
        </NavigationContainer>
      </>
    );
  }
}


