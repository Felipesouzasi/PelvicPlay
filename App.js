import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando as páginas
import SplashScreen from './src/pages/SplashScreen';
import Home from './src/pages/Home';

// Criando o Stack Navigator
const Stack = createStackNavigator(); //O Stack Navigator cria um fluxo de navegação entre telas 

//Definindo a tela inicial do app
//Definimos como false para remover o cabeçalho padrão gerado pelo Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      {/* Configurando o Stack Navigator */}
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="SplashScreen" component={SplashScreen} /> 
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
