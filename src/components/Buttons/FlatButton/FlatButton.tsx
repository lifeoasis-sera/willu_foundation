import React, {ReactNode, useRef} from 'react';
import {ColorBundle} from '../../../styles/color-bundle';
import {
  Animated,
  ColorValue,
  FlexAlignType,
  GestureResponderEvent,
  Omit,
  Platform,
  Pressable,
  ViewStyle,
} from 'react-native';
import {TypographyProps} from '../../Texts/Typography';
import {Typography} from '../../../components';

export interface FlatButtonProps {
  backgroundColor?: ColorBundle | ColorValue;
  textColor?: TypographyProps['color'];
  radius?: number;
  disable?: boolean;
  loading?: boolean;
  display?: FlexAlignType;
  containerStyle?: Omit<
    ViewStyle,
    | 'borderRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
    | 'borderBottomEndRadius'
    | 'borderBottomStartRadius'
    | 'borderTopEndRadius'
    | 'borderTopStartRadius'
  >;
  textStyle?: Omit<TypographyProps, 'children' | 'color'>;
  onPress?: () => void;
  animation?: boolean;
  children: string | ReactNode;
}

const FlatButton = (props: FlatButtonProps) => {
  const {
    children,
    backgroundColor = ColorBundle.primary,
    textColor = 'white',
    radius = 12,
    disable,
    loading,
    display = 'center',
    containerStyle,
    textStyle,
    onPress,
    animation = true,
  } = props;
  const animated = useRef(new Animated.Value(1)).current;

  function handlePressIn(_: GestureResponderEvent) {
    if (animation) {
      if (Platform.OS === 'ios') {
        Animated.spring(animated, {
          speed: 200,
          useNativeDriver: true,
          toValue: 0.95,
        }).start();
      }
    }
  }

  function handlePressOut(_: GestureResponderEvent) {
    if (animation) {
      if (Platform.OS === 'ios') {
        Animated.spring(animated, {
          speed: 200,
          useNativeDriver: true,
          toValue: 1,
        }).start();
      }
    }
  }

  return (
    <Animated.View
      style={{
        transform: [{scale: animated}],
        overflow: 'hidden',
        borderRadius: radius,
      }}>
      <Pressable
        android_ripple={animation ? {color: '#D6D9DF'} : undefined}
        pointerEvents={'box-only'}
        disabled={disable || loading}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[
          {
            overflow: 'hidden',
            opacity: disable ? (Platform.OS === 'ios' ? 0.3 : 0.6) : 1,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: display,
            borderRadius: radius,
            paddingHorizontal: 24,
            //typography size default 18이기 때문에 16
            paddingVertical: textStyle?.size ? textStyle.size - 2 : 16,
            backgroundColor,
          },
          containerStyle,
        ]}>
        {loading ? (
          <Typography color={textColor}>...</Typography>
        ) : typeof children === 'string' ? (
          <Typography color={textColor} {...textStyle}>
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
