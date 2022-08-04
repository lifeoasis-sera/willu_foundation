import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditHeightView from './EditHeight.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Height'>;
const EditHeightContainer = ({navigation}: Props) => {
  const [height, setHeight] = useState('');
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (height.length === 0) {
      setWarning(false);
    }
  }, [height]);

  function checkHeight() {
    const numberHeight = height ? +height : 0;
    return numberHeight >= 120 && numberHeight <= 240;
  }

  function submit() {
    const valid = checkHeight();
    if (valid) {
      // TODO API : 키 저장
      navigation.navigate('Smoke');
    } else {
      setWarning(true);
    }
  }

  return (
    <EditHeightView
      data={{height, warning}}
      handle={{
        onChangeHeight: setHeight,
        onSubmit: height ? submit : undefined,
      }}
    />
  );
};

export default EditHeightContainer;
