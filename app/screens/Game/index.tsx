import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const GameScreen = ({navigation}) => {
  const [playerMatchCount, setPlayerMatchCount] = useState(0);
  const [computerMatchCount, setComputerMatchCount] = useState(0);
  const [matchCount, setMatchCount] = useState(25);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState<'Player' | 'Computer' | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameMode, setGameMode] = useState('computer'); // 'computer' or 'player'

  useEffect(() => {
    if (matchCount === 0) {
      if (playerMatchCount % 2 === 0) {
        setWinner('Player');
      } else {
        setWinner('Computer');
      }
      setGameOver(true);
    }
  }, [matchCount, playerMatchCount]);

  useEffect(() => {
    if (
      !isPlayerTurn &&
      matchCount > 0 &&
      !gameOver &&
      gameMode === 'computer'
    ) {
      const computerTimer = setTimeout(playComputerTurn, 1000); // Задержка в 1 секунду
      return () => clearTimeout(computerTimer);
    }
  }, [isPlayerTurn, matchCount, gameOver, gameMode]);

  const handleMatchSelection = count => {
    if (count <= matchCount && isPlayerTurn && !gameOver) {
      setMatchCount(matchCount - count);
      setPlayerMatchCount(playerMatchCount + count);
      setIsPlayerTurn(false);
    }
  };

  const playComputerTurn = () => {
    const maxMatchesToTake = Math.min(matchCount, 3);
    let computerCount;

    if ((matchCount - 1) % 4 === 0) {
      computerCount = 1;
    } else if ((matchCount - 2) % 4 === 0) {
      computerCount = 2;
    } else if ((matchCount - 3) % 4 === 0) {
      computerCount = 3;
    } else {
      computerCount = Math.floor(Math.random() * maxMatchesToTake) + 1;
    }

    const remainingMatches = matchCount - computerCount;
    setMatchCount(remainingMatches);
    setComputerMatchCount(computerMatchCount + computerCount);
    setIsPlayerTurn(true);
  };

  const restartGame = () => {
    setPlayerMatchCount(0);
    setComputerMatchCount(0);
    setMatchCount(25);
    setIsPlayerTurn(true);
    setWinner(null);
    setGameOver(false);
  };

  const returnToMenu = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.matchCountText}>
        Player Matches: {playerMatchCount}
      </Text>
      <Text style={styles.matchCountText}>
        Computer Matches: {computerMatchCount}
      </Text>
      <Text style={styles.matchCountText}>Matches Left: {matchCount}</Text>
      {winner && <Text style={styles.winnerText}>{winner} wins!</Text>}
      {gameOver && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={restartGame}>
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={returnToMenu}>
            <Text style={styles.buttonText}>Return to Menu</Text>
          </TouchableOpacity>
        </View>
      )}
      {!gameOver && isPlayerTurn && (
        <Text style={styles.turnText}>Player's turn</Text>
      )}
      {!gameOver && !isPlayerTurn && (
        <Text style={styles.turnText}>Computer's turn</Text>
      )}
      <View style={styles.buttonContainer}>
        {matchCount >= 1 && (
          <TouchableOpacity
            style={[
              styles.button,
              isPlayerTurn || gameMode === 'player'
                ? styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={() => handleMatchSelection(1)}
            disabled={!isPlayerTurn && gameMode !== 'player'}>
            <Text style={styles.buttonText}>Take 1</Text>
          </TouchableOpacity>
        )}
        {matchCount >= 2 && (
          <TouchableOpacity
            style={[
              styles.button,
              isPlayerTurn || gameMode === 'player'
                ? styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={() => handleMatchSelection(2)}
            disabled={!isPlayerTurn && gameMode !== 'player'}>
            <Text style={styles.buttonText}>Take 2</Text>
          </TouchableOpacity>
        )}
        {matchCount >= 3 && (
          <TouchableOpacity
            style={[
              styles.button,
              isPlayerTurn || gameMode === 'player'
                ? styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={() => handleMatchSelection(3)}
            disabled={!isPlayerTurn && gameMode !== 'player'}>
            <Text style={styles.buttonText}>Take 3</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchCountText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  inactiveButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  turnText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
