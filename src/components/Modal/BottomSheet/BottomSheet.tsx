import React, {ReactNode, useEffect, useRef} from 'react';
import {
  Animated,
  ColorValue,
  Dimensions,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {ColorBundle} from '../../../styles/color-bundle';

interface BottomSheetModalProps {
  visible: boolean;
  showIndicator?: boolean;
  indicator?: {
    position: 'inside' | 'outside';
    color: ColorBundle | ColorValue;
    width: number;
  };
  onClose?: () => void;
  style?: ViewStyle;
  children?: ReactNode;
}

const BottomSheet = (props: BottomSheetModalProps) => {
  const {
    visible,
    style,
    onClose,
    showIndicator = true,
    indicator = {
      width: 40,
      color: ColorBundle.divider,
      position: 'inside',
    },
    children,
  } = props;
  const radius = 30;

  const screenHeight = Dimensions.get('window').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeBottomSheet.start(() => {
            onClose && onClose();
          });
        } else {
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (visible) {
      resetBottomSheet.start();
    }
  }, [visible]);

  const Indicator = () => (
    <View
      style={{
        position: 'absolute',
        top: 8,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: indicator.width,
          height: 5,
          borderRadius: 50,
          backgroundColor: indicator.color,
        }}
      />
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={'fade'}
      onRequestClose={onClose}
      statusBarTranslucent={true}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'black',
            opacity: 0.65,
          }}
          {...panResponders.panHandlers}>
          <Pressable
            onPress={onClose}
            style={{width: '100%', height: '100%'}}
          />
        </Animated.View>
        <Animated.View
          style={{
            width: '100%',
            borderTopRightRadius: radius,
            borderTopLeftRadius: radius,
            overflow: 'hidden',
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          {showIndicator && indicator.position === 'outside' && <Indicator />}
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              borderTopRightRadius: radius,
              borderTopLeftRadius: radius,
              ...style,
            }}>
            {children}
            {showIndicator && indicator.position === 'inside' && <Indicator />}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
