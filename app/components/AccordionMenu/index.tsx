import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SimpleAccordion } from 'react-native-simple-accordion';
import { AccordionItem } from '../AccordionItem';
import { ChangeMode } from '../ChangeMode';
// import {ChangeMode} from '../ChangeMode';

export const AccordionMenu = () => {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <SimpleAccordion
        viewInside={
          <AccordionItem description="Two people are playing a game. From the pile of 25 matches, each player takes either 1, 2 or 3 matches on each turn. The game is over once all matches are taken. Whoever has the even amount of matches wins." />
        }
        showArrows={true}
        title={'Rules'}
      />
      {/*TODO Add change mode soon... */}
      <SimpleAccordion
        viewInside={<ChangeMode />}
        showArrows={false}
        title={'Settings'}
      />
    </View>
  );
};
