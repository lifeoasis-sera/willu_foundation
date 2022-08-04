import React, {useEffect, useState} from 'react';
import SignUpAuthCodeView from './SignUpAuthCode.view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import {Alert} from 'react-native';
import {getTextJson} from '../../utils';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'AuthCode'>;
const LIMITED_TIME = 300;

const SignUpAuthCodeContainer = ({route, navigation}: Props) => {
  const [code, setCode] = useState('');
  const [counter, setCounter] = useState(LIMITED_TIME);
  const [loading, setLoading] = useState(false);
  const textJson = getTextJson();

  useEffect(() => {
    const timer = startTimer();
    return () => {
      console.log('==== clear outside222');
      clearInterval(timer);
    };
  }, [navigation]);

  // TODO 페이지를 나가면 timer가 멈춰야 함
  function startTimer() {
    const timer = setInterval(() => {
      setCounter(prev => {
        console.log('===== timer', prev);
        if (prev === 0) {
          console.log('==== clear inside');
          clearInterval(timer);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return timer;
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
      Alert.alert(
        textJson.SignUp.AuthCode.AlertMissTitle,
        textJson.SignUp.AuthCode.AlertMissSubtitle,
        [{text: textJson.Enum.Alert.Confirm, onPress: () => {}}],
      );
    }
  }

  function reSendCode() {
    // TODO API : 인증번호 재전송
    const isExpired = true;
    if (isExpired) {
      Alert.alert(textJson.SignUp.AuthCode.AlertExpired, undefined, [
        {text: textJson.Enum.Alert.Confirm, onPress: () => {}},
      ]);
    } else {
      setCounter(LIMITED_TIME);
      setCode('');
      startTimer();
    }
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
        timer: counter === 0 ? '' : convertMinAndSeconds(counter),
        loading,
      }}
      handle={{
        onChangeCode: setCode,
        onSubmit: code.length === 6 ? submitCode : undefined,
        onReSendCode: reSendCode,
        onChannelTalk: channelTalk,
      }}
    />
  );
};

export default SignUpAuthCodeContainer;
