import React, {useEffect, useState} from 'react';
import SignUpAuthCodeView from './SignUpAuthCode.view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'AuthCode'>;
const LIMITED_TIME = 300;

const SignUpAuthCodeContainer = ({route, navigation}: Props) => {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(LIMITED_TIME);
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (warning && code && code.length < 6) {
      setWarning(false);
    }
  }, [code]);

  // TODO 페이지를 나가면 timer가 멈춰야 함
  function startTimer() {
    const id = setInterval(() => {
      setTimer(prev => {
        console.log('===== timer', prev);
        if (prev === 0) {
          clearInterval(id);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
    return () => clearInterval(id);
    // return id;
  }

  function convertMinAndSeconds(seconds: number) {
    const remainder =
      seconds % 60 < 10 ? `0${seconds % 60}` : `${seconds % 60}`;

    return `0${Math.floor(seconds / 60)}:${remainder}`;
  }

  function submitCode() {
    setLoading(true);
    // TODO API : 인증 번호 확인
    const isCodeSame = true;
    setLoading(false);
    if (isCodeSame) {
      navigation.navigate('SlipDefaultProfile');
    } else {
      setWarning(true);
    }
  }

  function reSendCode() {
    // TODO API : 인증번호 재전송
    setTimer(LIMITED_TIME);
    setCode('');
    startTimer();
  }

  function channelTalk() {
    navigation.navigate('WebPage', {
      url: 'https://o1jwp.channel.io/support-bots/44185',
    });
  }

  return (
    <SignUpAuthCodeView
      data={{
        code,
        email: route.params.email,
        timer: timer === 0 ? '' : convertMinAndSeconds(timer),
        warning,
        loading,
      }}
      handle={{
        onChangeCode: setCode,
        onSubmit: submitCode,
        onReSendCode: reSendCode,
        onChannelTalk: channelTalk,
      }}
    />
  );
};

export default SignUpAuthCodeContainer;
