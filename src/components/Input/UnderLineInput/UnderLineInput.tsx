import React, {ReactNode} from 'react';
import {ColorBundle} from '../../../styles/color-bundle';
import {
  ColorValue,
  KeyboardType,
  Platform,
  TextInput,
  View,
} from 'react-native';

interface UnderLineInputProps {
  size?: number;
  color?: ColorBundle | ColorValue;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  suffix?: ReactNode;
  lineStyle?: {
    color?: ColorBundle | ColorValue;
    width?: number;
    padding?: number;
  };
  keyboardType?: KeyboardType;
  maxLength?: number;
  onSubmit?: () => void;
}

const UnderLineInput = (props: UnderLineInputProps) => {
  const {
    size = 24,
    color = ColorBundle.textDefault,
    placeholder,
    value,
    onChangeText,
    suffix,
    lineStyle,
    keyboardType,
    maxLength,
    onSubmit,
  } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: lineStyle?.width ? lineStyle.width : 1,
        borderBottomColor:
          lineStyle?.color || value
            ? ColorBundle.textDefault
            : ColorBundle.divider,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: lineStyle?.padding
          ? lineStyle.padding
          : Platform.OS === 'ios'
          ? 10
          : 0,
      }}>
      <TextInput
        autoFocus={true}
        underlineColorAndroid={'transparent'}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        onSubmitEditing={onSubmit}
        style={{flex: 1, fontSize: size, color}}
      />
      {suffix}
    </View>
  );
};

export default UnderLineInput;
