import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditReligionView from './EditReligion.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Religion'>;

const EditReligionContainer = ({navigation}: Props) => {
  const [selected, setSelected] = useState<'1' | '2' | '3' | '4' | '5'>();

  function submitReligion() {
    // TODO API : 종교 정보 저장
    navigation.navigate('Salary');
  }

  return (
    <EditReligionView
      data={{selected}}
      handle={{
        onSelect: setSelected,
        onSubmit: selected ? submitReligion : undefined,
      }}
    />
  );
};

export default EditReligionContainer;
