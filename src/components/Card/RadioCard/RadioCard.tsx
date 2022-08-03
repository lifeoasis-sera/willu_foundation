import React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {ColorBundle} from '../../../styles/color-bundle';
import {RadioButton} from '../../Buttons';
import {Typography} from '../../Texts';

interface RadioCardProps {
  onSelect: () => void;
  text: string;
  active?: boolean;
  style?: ViewStyle;
}

const RadioCard = (props: RadioCardProps) => {
  const {onSelect, text, active, style} = props;
  return (
    <Pressable onPress={onSelect} pointerEvents={'box-only'}>
      <View
        style={[
          {
            flexDirection: 'row',
            borderRadius: 12,
            backgroundColor: ColorBundle.backGround,
            padding: 16,
            alignItems: 'center',
          },
          style,
        ]}>
        <RadioButton size={24} borderWidth={2.4} active={active} />
        <Typography color={ColorBundle.textSecondary} style={{marginLeft: 12}}>
          {text}
        </Typography>
      </View>
    </Pressable>
  );
};

export default RadioCard;
