import React from 'react';
import { HomeScreen } from '../../screens/Home';
import { GameScreen } from '../../screens/Game';
import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Routes } from '../../constants/router';

type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.GAME]: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>;

export type GameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppRouter = () => {
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
