import React from 'react';
import {Animated, ColorValue, View, ViewStyle} from 'react-native';
import {ColorBundle} from '../../../styles/color-bundle';

interface ProgressBarProps {
  height: number;
  width: number | '100%';
  barWidth?: Animated.Value | number;
  percent?: number;
  color?: ColorValue;
  backgroundColor?: ColorValue;
  style?: ViewStyle;
}

const ProgressBar = (props: ProgressBarProps) => {
  const {
    height,
    width,
    barWidth,
    percent,
    color = ColorBundle.textDefault,
    backgroundColor = ColorBundle.divider,
    style,
  } = props;
  return (
    <View style={{height: height}}>
      <View
        style={{
          position: 'absolute',
          height: height,
          borderRadius: 30,
          backgroundColor: backgroundColor,
          width: width,
          ...style,
        }}
      />
      <Animated.View style={{width: barWidth || `${percent}%`}}>
        <View
          style={{
            position: 'absolute',
            height: height,
            borderRadius: 30,
            backgroundColor: color,
            width: '100%',
            ...style,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default ProgressBar;
