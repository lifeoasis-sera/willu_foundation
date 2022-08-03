import React, {useEffect, useState} from 'react';
import SignUpAuthEmailView from './SignUpAuthEmail.view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'AuthEmail'>;

const SignUpAuthEmailContainer = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>();
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setWarning(false);
    }
  }, [email]);

  function sendAuthCode() {
    if (email && checkValidEmail(email)) {
      setLoading(true);
      // TODO API : 인증 번호 발송
      navigation.navigate('AuthCode', {email: email});
      setLoading(false);
    } else {
      setWarning(true);
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

  return (
    <SignUpAuthEmailView
      data={{email, warning, loading}}
      handle={{onSendAuthCode: sendAuthCode, onChangeEmail: setEmail}}
    />
  );
};

export default SignUpAuthEmailContainer;
