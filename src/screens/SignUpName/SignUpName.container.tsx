import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import SignUpNameView from './SignUpName.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Name'>;

const SignUpNameContainer = ({navigation}: Props) => {
  const [name, setName] = useState('');

  function submitName() {
    // TODO API : 이름 저장
    navigation.navigate('Gender');
  }

  return (
    <SignUpNameView
      data={{name, maxLength: 12}}
      handle={{onChangeName: setName, onSubmit: submitName}}
    />
  );
};

export default SignUpNameContainer;
