import React, {useEffect, useState} from 'react';
import SignUpAuthEmailView from './SignUpAuthEmail.view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import {getTextJson} from '../../utils';
import {Alert} from 'react-native';

enum EMAIL_TYPE {
  SUCCESS,
  NOT_VALID,
  NOT_STANDARD,
}
type Props = NativeStackScreenProps<SignUpNavigationParams, 'AuthEmail'>;

const SignUpAuthEmailContainer = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>();
  const [guid, setGuid] = useState('');
  const [loading, setLoading] = useState(false);
  const textJson = getTextJson();

  const popularEmailList = [
    'gmail.com',
    'kakao.com',
    'naver.com',
    'daum.net',
    'nate.com',
    'hanmail.com',
    'hotmail.com',
    'outlook.com',
    'zum.com',
    'neowiz.com',
    'icloud.com',
  ];

  useEffect(() => {
    if (email === '') {
      setGuid('');
    }
  }, [email]);

  function sendAuthCode() {
    if (email) {
      const emailType = checkEmail(email);
      if (emailType === EMAIL_TYPE.SUCCESS) {
        setLoading(true);
        // TODO API : 인증 번호 발송
        const isExpired = false;
        if (isExpired) {
          Alert.alert(textJson.SignUp.AuthCode.AlertExpired);
        } else {
          navigation.navigate('AuthCode', {email: email});
        }
        setLoading(false);
      }

      if (emailType === EMAIL_TYPE.NOT_STANDARD) {
        setGuid(textJson.SignUp.AuthEmail.AlertStandard);
      }

      if (emailType === EMAIL_TYPE.NOT_VALID) {
        setGuid(textJson.SignUp.AuthEmail.AlertValid);
      }
    }
  }

  function checkValidEmail(email: string) {
    const equalEmail = popularEmailList.filter(target => {
      const revTarget = target.split('').reverse().join('');
      const revEmail = email.split('').reverse().join('');

      const equalIndex = revEmail.indexOf(revTarget);
      return equalIndex === 0;
    });

    return equalEmail.length <= 0;
  }

  function checkEmailStandard(email: string) {
    const emailList = email.split('@');
    if (emailList.length < 2) {
      return false;
    }
    return emailList[1].indexOf('.') !== -1;
  }

  function checkEmail(email: string) {
    if (checkEmailStandard(email)) {
      if (checkValidEmail(email)) {
        return EMAIL_TYPE.SUCCESS;
      }
      return EMAIL_TYPE.NOT_VALID;
    }
    return EMAIL_TYPE.NOT_STANDARD;
  }

  return (
    <SignUpAuthEmailView
      data={{email, guid: guid, loading}}
      handle={{
        onSendAuthCode: email ? sendAuthCode : undefined,
        onChangeEmail: setEmail,
      }}
    />
  );
};

export default SignUpAuthEmailContainer;
