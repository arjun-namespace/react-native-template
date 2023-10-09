import React, {lazy, Suspense} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

type names = 'home-outline' | 'home';

type IconProps = {
  name: names;
  height?: number;
  width?: number;
  fill?: string;
  style?: StyleProp<ViewStyle>;
};

export const Icon = ({
  name,
  height = 24,
  width = 24,
  fill = '#000000',
  style,
}: IconProps) => {
  const Component = lazy(() => {
    switch (name) {
      case 'home-outline':
        return import('src/assets/icons/home-outline.svg');
      case 'home':
        return import('src/assets/icons/home.svg');
      default:
        return import('src/assets/icons/home.svg');
    }
  });

  return (
    <Suspense fallback={<View />}>
      <Component height={height} width={width} fill={fill} style={style} />
    </Suspense>
  );
};
