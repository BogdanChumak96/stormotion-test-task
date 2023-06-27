import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { AccordionMenu } from '../../components/AccordionMenu';
import { styles } from './styles';
import { Routes } from '../../constants/router';
import { GameScreenProps } from '../../constants/types';

export const HomeScreen: React.FC<GameScreenProps> = ({ navigation }) => {
  const handleStartGame = (): void => {
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
