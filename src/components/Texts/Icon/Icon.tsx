import React from 'react';
import {ColorValue, Image, ImageSourcePropType, ImageStyle} from 'react-native';
import {ColorBundle} from '../../../styles/color-bundle';

export interface IconProps {
  icon: ImageSourcePropType;
  size: number;
  color?: ColorBundle | ColorValue;
  style?: ImageStyle;
}

const Icon = (props: IconProps) => {
  const {icon, size, color, style} = props;

  return (
    <Image
      source={icon}
      style={[{width: size, height: size, tintColor: color}, style]}
    />
  );
};

export default Icon;
