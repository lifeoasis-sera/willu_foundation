import React, {ReactNode, useRef} from 'react';
import {ColorBundle} from '../../../styles/color-bundle';
import {
  Animated,
  ColorValue,
  FlexAlignType,
  GestureResponderEvent,
  Platform,
  Pressable,
  ViewStyle,
} from 'react-native';
import {TypographyProps} from '../../Texts/Typography';
import {Typography} from '../../../components';

export interface FlatButtonProps {
  backgroundColor?: ColorBundle | ColorValue;
  textColor?: ColorBundle | ColorValue;
  disable?: boolean;
  loading?: boolean;
  display?: FlexAlignType;
  containerStyle?: ViewStyle;
  textStyle?: Omit<TypographyProps, 'children'>;
  onPress?: () => void;
  children: string | ReactNode;
}

const FlatButton = (props: FlatButtonProps) => {
  const {
    children,
    backgroundColor = ColorBundle.primary,
    textColor = 'white',
    disable,
    loading,
    display,
    containerStyle,
    textStyle,
    onPress,
  } = props;
  const animated = useRef(new Animated.Value(1)).current;

  function handlePressIn(_: GestureResponderEvent) {
    if (Platform.OS === 'ios') {
      Animated.spring(animated, {
        speed: 200,
        useNativeDriver: true,
        toValue: 0.95,
      }).start();
    }
  }

  function handlePressOut(_: GestureResponderEvent) {
    if (Platform.OS === 'ios') {
      Animated.spring(animated, {
        speed: 200,
        useNativeDriver: true,
        toValue: 1,
      }).start();
    }
  }

  return (
    <Animated.View style={{transform: [{scale: animated}], overflow: 'hidden'}}>
      <Pressable
        android_ripple={{
          color: '#D6D9DF',
          borderless: true,
        }}
        pointerEvents={'box-only'}
        disabled={disable || loading}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          {
            opacity: disable ? (Platform.OS === 'ios' ? 0.3 : 0.6) : 1,
            backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            paddingHorizontal: 24,
            paddingVertical: textStyle?.size ? textStyle.size - 2 : 16,
            alignSelf: display || 'center',
          },
          containerStyle,
        ]}>
        {loading ? (
          <Typography color={textColor}>...</Typography>
        ) : typeof children === 'string' ? (
          <Typography color={textColor || textStyle?.color} {...textStyle}>
            {children}
          </Typography>
        ) : (
          children
        )}
      </Pressable>
    </Animated.View>
  );
};

export default FlatButton;
