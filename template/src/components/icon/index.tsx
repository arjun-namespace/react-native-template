import React, {lazy, Suspense} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

type names = 'home';

type IconProps = {
  name: names;
  height?: number;
  width?: number;
  fill?: string;
  type?: 'outline' | 'filled';
  style?: StyleProp<ViewStyle>;
};

export const Icon = ({
  name,
  height = 24,
  width = 24,
  fill = '#000000',
  type = 'outline',
  style,
}: IconProps) => {
  const Component = lazy(() => {
    switch (name) {
      case 'home':
        return type === 'outline'
          ? import('src/assets/icons/home-outline.svg')
          : import('src/assets/icons/home.svg');
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
