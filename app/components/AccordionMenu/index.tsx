import { Text, View } from 'react-native';
import React from 'react';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { ChangeMode } from '../ChangeMode';
import { styles } from './styles';
import { Menu } from '../../constants/menu';

export const AccordionMenu = () => {
  return (
    <View style={styles.container}>
      <SimpleAccordion
        viewInside={
          <Text>
            Two people are playing a game. From the pile of 25 matches, each
            player takes either 1, 2 or 3 matches on each turn. The game is over
            once all matches are taken. Whoever has the even amount of matches
            wins.
          </Text>
        }
        showArrows={true}
        title={Menu.RULES}
      />
      <SimpleAccordion
        viewInside={<ChangeMode />}
        showArrows={true}
        title={Menu.SETTINGS}
      />
    </View>
  );
};
