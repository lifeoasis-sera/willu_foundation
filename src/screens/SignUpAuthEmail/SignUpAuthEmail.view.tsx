import React from 'react';
import {FlatButton, SignUpTemplate, UnderLineInput} from '../../components';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';

interface SignUpAuthEmailViewProps {
  data: {
    email: string | undefined;
    warning: boolean;
    loading: boolean;
  };
  handle: {
    onChangeEmail: (email: string) => void;
    onSendAuthCode: () => void;
  };
}

const SignUpAuthEmailView = (props: SignUpAuthEmailViewProps) => {
  const textJson = getTextJson();
  const {email, warning, loading} = props.data;
  const {onChangeEmail, onSendAuthCode} = props.handle;

  return (
    <SignUpTemplate
      icon={require('../../assets/image/icon/ic_check_shield.png')}
      title={textJson.SignUp.AuthEmail.Title}
      subtitle={textJson.SignUp.AuthEmail.Subtitle}
      shownHeaderTitle={true}
      style={{paddingHorizontal: 24}}>
      <UnderLineInput
        color={warning ? ColorBundle.activate : ColorBundle.textDefault}
        placeholder={textJson.SignUp.AuthEmail.Input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <FlatButton
        containerStyle={{alignSelf: 'flex-end', marginTop: 20}}
        disable={!email}
        loading={loading}
        onPress={onSendAuthCode}>
        {textJson.SignUp.AuthEmail.Submit}
      </FlatButton>
    </SignUpTemplate>
  );
};

export default SignUpAuthEmailView;
