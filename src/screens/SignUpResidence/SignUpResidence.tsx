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
      progressBar={{num: 5, total: 7}}
      style={{paddingHorizontal: 24}}>
      <IconButton
        onPress={() => navigation.navigate('Job')}
        icon={require('../../assets/image/icon/ic_arrow_right.png')}
        size={{width: 29, height: 24}}
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

export default SignUpResidence;
