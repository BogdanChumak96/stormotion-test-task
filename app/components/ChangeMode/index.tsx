import React, { useContext } from 'react';
import { Text, View, Switch } from 'react-native';
import { GameModeContext } from '../../providers/GameModeContext';
import { Modes } from '../../constants/modes';
import { styles } from './styles';

export const ChangeMode: React.FC = () => {
  const { gameMode, setGameMode } = useContext(GameModeContext);
  const whoFirst = gameMode === Modes.PC ? Modes.PLAYER : Modes.PC;
  const isPcTurn = gameMode === Modes.PC ? true : false;

  const handleChangeValue = () => {
    setGameMode(whoFirst);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Who goes first?</Text>
        <Text>{gameMode}</Text>
      </View>
      <Switch value={isPcTurn} onValueChange={handleChangeValue} />
    </View>
  );
};
