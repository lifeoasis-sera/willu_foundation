import React from 'react';
import {IconButton, SignUpTemplate} from '../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Residence'>;
const SignUpResidence = ({navigation}: Props) => {
  return (
    <SignUpTemplate
      title={'거주지역 제목'}
      subtitle={'거주지역 부제목'}
      progressBar={{num: 4, total: 5}}
      submitButton={
        <IconButton
          radius={60}
          onPress={() => navigation.navigate('Job')}
          icon={require('../../assets/image/icon/ic_arrow_right.png')}
          size={24}
          style={{margin: 16}}
        />
      }
      style={{paddingHorizontal: 24}}
    />
  );
};

export default SignUpResidence;
