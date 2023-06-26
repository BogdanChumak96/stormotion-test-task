import { Button, StyleSheet, Text, View } from 'react-native';
import { AccordionMenu } from '../../components/AccordionMenu';
import ButtonMenu from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation();

  const handleStartGame = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battle Matches🔥</Text>
      <AccordionMenu />
      <Button onPress={handleStartGame} title={'Start Game ▶️'} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
});
