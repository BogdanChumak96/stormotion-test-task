import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { AccordionMenu } from '../../components/AccordionMenu';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Routes } from '../../constants/router';
import { GameScreenProps } from '../../components/AppRouter';

export const HomeScreen = ({ navigation }: GameScreenProps) => {
  const handleStartGame = () => {
    navigation.navigate(Routes.GAME);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battle Matches🔥</Text>
      <AccordionMenu />
      <Button onPress={handleStartGame} title={'Start Game ▶️'} />
    </View>
  );
};
