import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditSalaryView from './EditSalary.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Salary'>;

const EditSalaryContainer = ({navigation}: Props) => {
  const [selected, setSelected] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>();

  function submitSalary() {
    // TODO API : 연봉 정보 저장
    navigation.navigate('Selfie');
  }

  return (
    <EditSalaryView
      data={{selected}}
      handle={{onSelect: setSelected, onSubmit: submitSalary}}
    />
  );
};

export default EditSalaryContainer;
