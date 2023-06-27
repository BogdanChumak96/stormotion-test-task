import React from 'react';
import { HomeScreen } from '../../screens/Home';
import { GameScreen } from '../../screens/Game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants/router';
import { RootStackParamList } from '../../constants/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
        <Stack.Screen name={Routes.GAME} component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
