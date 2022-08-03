import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditSmokeView from './EditSmoke.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Smoke'>;

const EditSmokeContainer = ({navigation}: Props) => {
  const [selected, setSelected] = useState<'1' | '2' | '3'>();

  function submitSmoke() {
    // TODO API : 흡연 정보 저장
    navigation.navigate('Drink');
  }

  return (
    <EditSmokeView
      data={{selected}}
      handle={{onSelect: setSelected, onSubmit: submitSmoke}}
    />
  );
};

export default EditSmokeContainer;
