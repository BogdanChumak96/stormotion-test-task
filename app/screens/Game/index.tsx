import React, { useState, useEffect, useContext, FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GameModeContext } from '../../providers/GameModeContext';
import { Modes } from '../../constants/modes';
import { Routes } from '../../constants/router';
import { PickMatches } from '../../components/PickMatches';
import { HomeScreenProps } from '../../components/AppRouter';

export const GameScreen = ({ navigation }: HomeScreenProps) => {
  const { gameMode } = useContext(GameModeContext);
  const [playerMatchCount, setPlayerMatchCount] = useState(0);
  const [computerMatchCount, setComputerMatchCount] = useState(0);
  const [matchCount, setMatchCount] = useState(25);
  const [isPlayerTurn, setIsPlayerTurn] = useState(gameMode === Modes.PLAYER);
  const [winner, setWinner] = useState<Modes.PLAYER | Modes.PC | null>(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (matchCount === 0) {
      if (playerMatchCount % 2 === 0) {
        setWinner(Modes.PLAYER);
      } else {
        setWinner(Modes.PC);
      }
      setGameOver(true);
    }
  }, [matchCount, playerMatchCount]);

  useEffect(() => {
    if (
      !isPlayerTurn &&
      matchCount > 0 &&
      !gameOver &&
      (gameMode === Modes.PC || gameMode === Modes.PLAYER)
    ) {
      const computerTimer = setTimeout(playComputerTurn, 1000);
      return () => clearTimeout(computerTimer);
    }
  }, [isPlayerTurn, matchCount, gameOver, gameMode]);

  const renderTurnText = (gameOver, isPlayerTurn) => {
    if (!gameOver && isPlayerTurn) {
      return `${Modes.PLAYER} turn`;
    }

    if (!gameOver && !isPlayerTurn) {
      return `${Modes.PC} turn`;
    }
  };
  const turnText = renderTurnText(gameOver, isPlayerTurn);

  const handleMatchSelection = (count: number) => {
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
    setIsPlayerTurn(gameMode === Modes.PLAYER);
    setWinner(null);
    setGameOver(false);
  };

  const returnToMenu = () => {
    navigation.navigate(Routes.HOME);
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

      <Text style={styles.turnText}>{turnText}</Text>
      <PickMatches
        isPlayerTurn={isPlayerTurn}
        handleMatchSelection={handleMatchSelection}
        matchCount={matchCount}
      />
    </View>
  );
};
