import React, {useState} from 'react';
import {IconButton, SignUpTemplate, UnderLineInput} from '../../components';
import {getTextJson} from '../../utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Job'>;
const SignUpJob = ({navigation}: Props) => {
  const textJson = getTextJson();
  const [job, setJob] = useState<string>();

  return (
    <SignUpTemplate
      title={textJson.SignUp.Job.Title}
      subtitle={textJson.SignUp.Job.Subtitle}
      progressBar={{num: 6, total: 7}}
      style={{paddingHorizontal: 24}}>
      <UnderLineInput
        placeholder={textJson.SignUp.Job.Input}
        onChangeText={text => setJob(text)}
        value={job}
      />
      <IconButton
        onPress={() => navigation.navigate('SlipDetailProfile')}
        icon={require('../../assets/image/icon/ic_arrow_right.png')}
        size={{width: 29, height: 24}}
        disable={!job}
        containerStyle={{
          width: 56,
          height: 56,
          borderRadius: 60,
          marginTop: 73,
          alignSelf: 'flex-end',
        }}
      />
    </SignUpTemplate>
  );
};

export default SignUpJob;
