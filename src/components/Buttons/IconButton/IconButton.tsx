import React from 'react';
import {FlatButton} from '../index';
import {FlatButtonProps} from '../FlatButton';
import {Icon} from '../../Texts';
import {IconProps} from '../../Texts/Icon';

type IconButtonProps = Omit<FlatButtonProps, 'children' | 'textStyle'> &
  IconProps;

const IconButton = (props: IconButtonProps) => {
  const {icon, size, color, style, containerStyle, ...flatButtonStyle} = props;

  return (
    <FlatButton
      containerStyle={{
        paddingHorizontal: 0,
        paddingVertical: 0,
        ...containerStyle,
      }}
      {...flatButtonStyle}>
      <Icon icon={icon} size={size} color={color} style={style} />
    </FlatButton>
  );
};

export default IconButton;
