import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditDrinkView from './EditDrink.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Drink'>;

const EditDrinkContainer = ({navigation}: Props) => {
  const [selected, setSelected] = useState<'1' | '2' | '3' | '4'>();

  function submitDrink() {
    // TODO API : 음주 정보 저장
    navigation.navigate('ChildPlan');
  }

  return (
    <EditDrinkView
      data={{selected}}
      handle={{onSelect: setSelected, onSubmit: submitDrink}}
    />
  );
};

export default EditDrinkContainer;
