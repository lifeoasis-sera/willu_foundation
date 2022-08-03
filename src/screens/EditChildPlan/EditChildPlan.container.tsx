import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditChildPlanView from './EditChildPlan.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'ChildPlan'>;

const EditChildPlanContainer = ({navigation}: Props) => {
  const [selected, setSelected] = useState<'1' | '2' | '3'>();

  function submitSmoke() {
    // TODO API : 자녀 계획 정보 저장
    navigation.navigate('Politics');
  }

  return (
    <EditChildPlanView
      data={{selected}}
      handle={{onSelect: setSelected, onSubmit: submitSmoke}}
    />
  );
};

export default EditChildPlanContainer;
