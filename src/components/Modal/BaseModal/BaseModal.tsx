import React, {ReactNode} from 'react';
import {Pressable, Modal, StyleSheet, View, ViewStyle} from 'react-native';
import {Typography} from '../../Texts';

interface BaseModalProps {
  visible: boolean;
  closeButtonText?: string;
  onClose?: () => void;
  modalStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  children?: ReactNode;
}

const BaseModal = (props: BaseModalProps) => {
  const {
    visible,
    closeButtonText,
    onClose,
    containerStyle,
    modalStyle,
    children,
  } = props;

  const CloseButton = closeButtonText && (
    <Pressable
      pointerEvents={'box-only'}
      hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}
      onPress={onClose}
      style={{marginTop: 24}}>
      <Typography color={'white'}>{closeButtonText}</Typography>
    </Pressable>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType={'fade'}
      onRequestClose={onClose}
      statusBarTranslucent={true}
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'black',
            opacity: 0.7,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            ...containerStyle,
          }}>
          <View
            style={{
              flexDirection: 'column',
              backgroundColor: 'white',
              borderRadius: 20,
              ...modalStyle,
            }}>
            {children}
          </View>
          {CloseButton}
        </View>
      </View>
    </Modal>
  );
};

export default BaseModal;
