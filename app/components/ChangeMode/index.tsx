import { Text, View, Switch } from 'react-native';
import React, { useContext, useState } from 'react';
import { GameModeContext } from '../../providers/GameModeContext';

export const ChangeMode = () => {
  const { gameMode, setGameMode } = useContext(GameModeContext);
  return (
    <View>
      <Text>{gameMode}</Text>
      <Switch
        value={gameMode === 'Computer' ? true : false}
        onValueChange={() =>
          setGameMode(gameMode === 'Computer' ? 'Player' : 'Computer')
        }
      />
    </View>
  );
};
