import React from 'react';
import {FlatButton, SignUpTemplate, UnderLineInput} from '../../components';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';

interface SignUpAuthEmailViewProps {
  data: {
    email: string | undefined;
    guid: string;
    loading: boolean;
  };
  handle: {
    onChangeEmail: (email: string) => void;
    onSendAuthCode?: () => void;
  };
}

const SignUpAuthEmailView = (props: SignUpAuthEmailViewProps) => {
  const textJson = getTextJson();
  const {email, guid, loading} = props.data;
  const {onChangeEmail, onSendAuthCode} = props.handle;

  return (
    <SignUpTemplate
      icon={require('../../assets/image/icon/ic_check_shield.png')}
      title={textJson.SignUp.AuthEmail.Title}
      subtitle={textJson.SignUp.AuthEmail.Subtitle}
      guid={guid ? {text: guid, color: ColorBundle.activate} : undefined}
      shownHeaderTitle={true}
      submitButton={
        <FlatButton
          loading={loading}
          disable={!onSendAuthCode}
          onPress={onSendAuthCode}>
          {textJson.SignUp.AuthEmail.Submit}
        </FlatButton>
      }
      style={{paddingHorizontal: 24}}>
      <UnderLineInput
        color={guid ? ColorBundle.activate : ColorBundle.textDefault}
        placeholder={textJson.SignUp.AuthEmail.Input}
        onChangeText={onChangeEmail}
        value={email}
        lineStyle={{color: guid ? ColorBundle.activate : undefined}}
      />
    </SignUpTemplate>
  );
};

export default SignUpAuthEmailView;
