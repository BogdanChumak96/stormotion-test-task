import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IAccordionItem } from '../../constants/types';

export const AccordionItem: React.FC<IAccordionItem> = ({
  description,
  children,
}) => {
  return (
    <View style={styles.container}>
      <Text>{description}</Text>
      {children}
    </View>
  );
};
