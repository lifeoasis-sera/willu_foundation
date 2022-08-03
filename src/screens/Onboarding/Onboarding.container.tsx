import React from 'react';
import OnboardingView from './Onboarding.view';
import {useNavigation} from '@react-navigation/native';
import {SignUpNavigationParams} from '../../navigations/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OnboardingContainer = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<SignUpNavigationParams, 'Onboarding'>
    >();

  function signUp() {
    navigation.navigate('AuthEmail');
  }

  function linkTerms() {
    // 이용 약관
  }

  function linkPrivacy() {
    // 개인정보
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
