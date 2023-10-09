import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BottomTabNavigation} from './BottomTabNavigation';

export type MainStackParamList = {
  BottomTab: undefined;
  Home: undefined;
  Splashscreen: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavitation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavitation;
