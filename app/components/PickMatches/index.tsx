import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface IPickMatches {
  isPlayerTurn: boolean;
  handleMatchSelection: (count: number) => void;
  matchCount: number;
}

export const PickMatches = ({
  isPlayerTurn,
  handleMatchSelection,
  matchCount,
}: IPickMatches) => {
  const matchesArray = [1, 2, 3];

  return (
    <View style={styles.buttonContainer}>
      {matchesArray.map(
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
      )}
    </View>
  );
};
