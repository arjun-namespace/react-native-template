import React from 'react';
import {Text} from 'react-native';
import Config from 'react-native-config';
import {Icon} from 'src/components/icon';

export const HomeScreen = () => {
  return (
    <>
      <Icon name="home" />
      <Text style={{color: '#000000'}}>Welcome to {Config.ENV_TEST} App</Text>
    </>
  );
};
