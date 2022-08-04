import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import SignUpJobView from './SignUpJob.view';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Job'>;

const SignUpJobContainer = ({navigation}: Props) => {
  const [job, setJob] = useState('');

  function submitJob() {
    navigation.navigate('SlipDetailProfile');
  }
  return (
    <SignUpJobView
      data={{job, maxLength: 20}}
      handle={{
        onSubmit: job.trim() ? submitJob : undefined,
        onChangeJob: setJob,
      }}
    />
  );
};

export default SignUpJobContainer;
