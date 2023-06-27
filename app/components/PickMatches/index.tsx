import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IPickMatches } from '../../constants/types';

export const PickMatches: React.FC<IPickMatches> = ({
  isPlayerTurn,
  handleMatchSelection,
  matchCount,
}) => {
  const matchesArray: number[] = [1, 2, 3];

  const buttons = matchesArray.map(
    (count) =>
      matchCount >= count && (
        <TouchableOpacity
          key={count}
          style={[
            styles.button,
            isPlayerTurn ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => handleMatchSelection(count)}
          disabled={!isPlayerTurn}
        >
          <Text style={styles.buttonText}>Take {count}</Text>
        </TouchableOpacity>
      ),
  );
  return <View style={styles.buttonContainer}>{buttons}</View>;
};
