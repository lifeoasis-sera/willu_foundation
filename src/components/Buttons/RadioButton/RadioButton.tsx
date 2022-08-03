import React from 'react';
import {ColorValue, Pressable, View} from 'react-native';
import {ColorBundle} from '../../../styles/color-bundle';

interface RadioButtonProps {
  active?: boolean;
  onPress?: () => void;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
  size?: number;
  activeColor?: ColorValue;
  borderWidth?: number;
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  const {
    active,
    onPress,
    pointerEvents,
    size = 20,
    activeColor = ColorBundle.primary,
    borderWidth = 1,
  } = props;

  return (
    <Pressable
      pointerEvents={pointerEvents}
      onPress={onPress}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderColor: active ? activeColor : ColorBundle.disable,
        borderWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {active && (
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: activeColor,
            borderRadius: 5,
          }}
        />
      )}
    </Pressable>
  );
};

export default RadioButton;
