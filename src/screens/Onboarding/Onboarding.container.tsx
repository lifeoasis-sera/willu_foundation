import React from 'react';
import OnboardingView from './Onboarding.view';
import {useNavigation} from '@react-navigation/native';
import {SignUpNavigationParams} from '../../navigations/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Linking} from 'react-native';

const OnboardingContainer = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<SignUpNavigationParams, 'Onboarding'>
    >();

  function signUp() {
    navigation.navigate('AuthEmail');
  }

  function linkTerms() {
    // TODO Front : 이용 약관
    Linking.openURL('https://www.maum.app/ko');
  }

  function linkPrivacy() {
    // TODO Front : 개인정보
    Linking.openURL('https://www.maum.app/ko');
  }

  return (
    <OnboardingView
      handle={{
        onSignUp: signUp,
        onTerms: linkTerms,
        onPrivacy: linkPrivacy,
      }}
    />
  );
};

export default OnboardingContainer;
