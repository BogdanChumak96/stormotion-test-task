import {Text, View} from 'react-native';
import React from 'react';

interface IAccordionItem {
  description?: string;
  children?: React.ReactNode;
}

export const AccordionItem = ({description, children}: IAccordionItem) => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <Text>{description}</Text>
      {children}
    </View>
  );
};
