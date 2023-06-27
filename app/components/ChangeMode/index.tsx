import React, { useContext } from 'react';
import { Text, View, Switch } from 'react-native';
import { GameModeContext } from '../../providers/GameModeContext';
import { Modes } from '../../constants/modes';

export const ChangeMode = () => {
  const { gameMode, setGameMode } = useContext(GameModeContext);
  return (
    <View>
      <Text>{gameMode}</Text>
      <Switch
        value={gameMode === Modes.PC ? true : false}
        onValueChange={() =>
          setGameMode(gameMode === Modes.PC ? Modes.PLAYER : Modes.PC)
        }
      />
    </View>
  );
};
