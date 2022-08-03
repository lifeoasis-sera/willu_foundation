import React from 'react';
import {Image, ImageSourcePropType, ImageStyle} from 'react-native';
import {FlatButton} from '../index';
import {FlatButtonProps} from '../FlatButton';

interface IconButtonProps
  extends Omit<FlatButtonProps, 'children' | 'textStyle'> {
  icon: ImageSourcePropType;
  size: number | {width: number; height: number};
  style?: ImageStyle;
}

const IconButton = (props: IconButtonProps) => {
  const {icon, size: _size, style: imageStyle, ...flatButtonStyle} = props;

  const size = (function () {
    if (typeof _size === 'number') {
      return {width: _size, height: _size};
    }
    return _size;
  })();

  return (
    <FlatButton {...flatButtonStyle}>
      <Image
        source={icon}
        style={[{width: size.width, height: size.height}, imageStyle]}
      />
    </FlatButton>
  );
};

export default IconButton;
