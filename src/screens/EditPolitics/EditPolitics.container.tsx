import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditPoliticsView from './EditPolitics.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Politics'>;

const EditPoliticsContainer = ({navigation}: Props) => {
  const [selected, setSelected] = useState<'1' | '2' | '3' | '4'>();

  function submitPolitics() {
    // TODO API : 정치 성향 정보 저장
    navigation.navigate('Religion');
  }

  return (
    <EditPoliticsView
      data={{selected}}
      handle={{onSelect: setSelected, onSubmit: submitPolitics}}
    />
  );
};

export default EditPoliticsContainer;
