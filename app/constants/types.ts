import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from './router';

export interface IPickMatches {
  isPlayerTurn: boolean;
  handleMatchSelection: (count: number) => void;
  matchCount: number;
}

export interface IAccordionItem {
  description?: string;
  children?: React.ReactNode;
}

export interface IGameModeProvider {
  children: React.ReactNode;
}

export type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.GAME]: undefined;
};

export type GameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>;
