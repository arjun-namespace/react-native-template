import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from 'src/screens/HomeScreen';

export type MainStackParamList = {
  Home: undefined;
  Splashscreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavitation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavitation;
