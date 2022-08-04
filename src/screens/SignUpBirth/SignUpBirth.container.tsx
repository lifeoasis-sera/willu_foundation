import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import SignUpBirthView from './SignUpBirth.view';
import {getOnlyAge} from '../../utils';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Birth'>;

const SignUpBirthContainer = ({navigation}: Props) => {
  const [birth, setBirth] = useState('');
  const [validYear, setValidYear] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (birth && birth.length === 8) {
      const age = getOnlyAge(
        +birth.slice(0, 4),
        +birth.slice(4, 6),
        +birth.slice(6, 8),
      );
      setValidYear(age >= 19);
    }

    if (birth?.length === 0) {
      setValidYear(true);
    }
  }, [birth]);

  function submitBirth() {
    // TODO API : 생년월일 정보 저장
    navigation.navigate('Residence');
    setModal(false);
  }

  return (
    <SignUpBirthView
      data={{
        birth,
        modalVisible: modal,
        validYear,
      }}
      handle={{
        onChangeBirth: setBirth,
        onSubmit: validYear && birth?.length === 8 ? submitBirth : undefined,
        openModal: () => setModal(true),
        closeModal: () => setModal(false),
      }}
    />
  );
};

export default SignUpBirthContainer;
