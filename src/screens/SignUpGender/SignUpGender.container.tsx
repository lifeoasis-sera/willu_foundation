import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import SignUpGenderView from './SignUpGender.view';
import {GENDER_TYPE} from '../../assets/enum/type';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Gender'>;

const SignUpGenderContainer = ({navigation}: Props) => {
  const [selectedGender, setSelectGender] = useState<GENDER_TYPE>();

  function submitGender() {
    // TODO API : 성별 정보 저장
    navigation.navigate('Birth');
  }

  return (
    <SignUpGenderView
      data={{selectedGender}}
      handle={{
        onSelectGender: setSelectGender,
        onSubmit: selectedGender ? submitGender : undefined,
      }}
    />
  );
};

export default SignUpGenderContainer;
