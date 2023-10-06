import React from 'react';
import {Text} from 'react-native';
import Config from 'react-native-config';

export const HomeScreen = () => {
  return <Text>Welcome Home {Config.ENV_TEST}</Text>;
};
