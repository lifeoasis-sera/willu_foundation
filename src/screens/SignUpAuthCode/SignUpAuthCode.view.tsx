import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {getTextJson, isNumber} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';
import {
  FlatButton,
  IconButton,
  SignUpTemplate,
  Typography,
} from '../../components';
import {
  CodeField,
  Cursor,
  RenderCellOptions,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

interface SignUpAuthCodeViewProps {
  data: {
    email: string;
    timer: string;
    code: string | undefined;
    warning: boolean;
    loading: boolean;
  };
  handle: {
    onChangeCode: (text: string) => void;
    onReSendCode: () => void;
    onSubmit: () => void;
    onChannelTalk: () => void;
  };
}

const SignUpAuthCodeView = (props: SignUpAuthCodeViewProps) => {
  const {email, code, timer, warning, loading} = props.data;
  const {onChangeCode, onChannelTalk, onReSendCode, onSubmit} = props.handle;

  const textJson = getTextJson();
  const inputRef = useBlurOnFulfill({value: code, cellCount: 6});
  const [handlerProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: onChangeCode,
  });

  const RenderNumberInput = (cellOptions: RenderCellOptions) => {
    const {index, symbol, isFocused} = cellOptions;
    return (
      <View
        onLayout={getCellOnLayoutHandler(index)}
        key={index}
        style={[styles.cellRoot, (!!symbol || isFocused) && styles.focusCell]}>
        <Text
          style={[
            styles.cellText,
            {color: warning ? ColorBundle.activate : ColorBundle.textDefault},
          ]}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      </View>
    );
  };

  return (
    <SignUpTemplate
      title={textJson.SignUp.AuthCode.Title}
      subtitle={email}
      shownHeaderTitle={true}
      subSubTitle={
        <Pressable
          pointerEvents={'box-only'}
          disabled={!!timer}
          onPress={onReSendCode}
          hitSlop={{left: 5, right: 5, top: 3}}>
          <Typography
            size={14}
            color={!timer ? ColorBundle.primary : ColorBundle.activate}
            style={{marginTop: 8}}>
            {timer || textJson.SignUp.AuthCode.ReCode}
          </Typography>
        </Pressable>
      }
      submitButton={
        <IconButton
          onPress={onSubmit}
          disable={!code || code.length !== 6}
          loading={loading}
          icon={require('../../assets/image/icon/ic_arrow_right.png')}
          size={{width: 29, height: 24}}
          containerStyle={{
            width: 56,
            height: 56,
            borderRadius: 60,
          }}
        />
      }
      style={{paddingHorizontal: 24}}>
      <CodeField
        ref={inputRef}
        {...handlerProps}
        value={code}
        onChangeText={text => {
          if (isNumber(text)) {
            onChangeCode(text);
          }
        }}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType={'number-pad'}
        textContentType={'none'}
        renderCell={RenderNumberInput}
        autoFocus={true}
        onSubmitEditing={code?.length === 6 ? onSubmit : undefined}
      />
      <FlatButton
        onPress={onChannelTalk}
        backgroundColor={ColorBundle.divider}
        textColor={ColorBundle.textSecondary}
        textStyle={{size: 12, bold: '700', lineHeight: 1.6}}
        containerStyle={{
          alignSelf: 'flex-start',
          marginTop: 23,
          paddingHorizontal: 10,
          paddingVertical: 6,
        }}>
        {textJson.SignUp.AuthCode.NotCode}
      </FlatButton>
    </SignUpTemplate>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    width: '100%',
  },
  cellRoot: {
    width: 45,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: ColorBundle.disable,
    borderBottomWidth: 2,
  },
  cellText: {
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: ColorBundle.textDefault,
    borderBottomWidth: 2,
  },
});

export default SignUpAuthCodeView;
