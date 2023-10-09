import React from 'react';
import {Text} from 'react-native';
import Config from 'react-native-config';
import SampleBell from 'src/assets/icons/SampleBell.svg';

export const HomeScreen = () => {
  return (
    <>
      <SampleBell height={48} width={48} />
      <Text style={{color: 'black'}}>Welcome Home {Config.ENV_TEST}</Text>
    </>
  );
};
