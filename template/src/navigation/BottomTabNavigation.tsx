import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from 'src/screens/HomeScreen';
import {Icon} from 'src/components/icon';

const BottomTab = createBottomTabNavigator();

const HomeTabIcon = ({color, size}: {color: string; size: number}) => {
  return <Icon name="home" fill={color} height={size} width={size} />;
};

const HomeTabIcon2 = ({color, size}: {color: string; size: number}) => {
  return <Icon name="home-outline" fill={color} height={size} width={size} />;
};

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <BottomTab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon2,
        }}
      />
    </BottomTab.Navigator>
  );
};
