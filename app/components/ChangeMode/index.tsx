import {Text, View, Switch} from 'react-native';
import React, {useState} from 'react';

export const ChangeMode = () => {
  const [firstMovePlayer, setFirstMovePlayer] = useState(false);
  return (
    <View>
      <Text>{firstMovePlayer ? 'Player' : ' AI'}</Text>
      <Switch
        value={firstMovePlayer}
        onValueChange={() => setFirstMovePlayer(!firstMovePlayer)}
      />
    </View>
  );
};
