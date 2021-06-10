import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';


import Routes from './src/routes';
import {AuthProvider} from './src/contexts/auth';

import { 
  useFonts, 
  Jost_400Regular,
  Jost_600SemiBold
} 
from '@expo-google-fonts/jost';


export default function App(){
  const [ fonstLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fonstLoaded)
    return <AppLoading/>  
    
  return (  
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
    
  )
}

