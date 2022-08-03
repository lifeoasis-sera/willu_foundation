import {Typography} from '../index';
import {View, ViewStyle} from 'react-native';
import React from 'react';
import {TypographyProps} from '../Typography';
import {ColorBundle} from '../../../styles/color-bundle';

interface DotListProps extends TypographyProps {
  containerStyle?: ViewStyle;
}

const DotList = (props: DotListProps) => {
  const {
    size = 18,
    color = ColorBundle.textDefault,
    lineHeight = 1.6,
    bold = '500',
    style,
    containerStyle,
    children,
  } = props;

  return (
    <View style={containerStyle}>
      {children.split('\n').map(row => (
        <View key={`${row}`} style={{flexDirection: 'row'}}>
          <Typography
            size={size}
            color={color}
            lineHeight={lineHeight}
            bold={bold}
            style={style}>
            {'\u2022'}
          </Typography>
          <Typography
            size={size}
            color={color}
            lineHeight={lineHeight}
            bold={bold}
            style={{...style, flex: 1, paddingLeft: size * 0.5}}>
            {row}
          </Typography>
        </View>
      ))}
    </View>
  );
};

export default DotList;
