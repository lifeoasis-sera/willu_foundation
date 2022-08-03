import React from 'react';
import {SlipTemplate} from '../../components';
import {getTextJson} from '../../utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';

type Props = NativeStackScreenProps<
  SignUpNavigationParams,
  'SlipDefaultProfile'
>;

const SlipDefaultProfile = ({navigation}: Props) => {
  const textJson = getTextJson();

  const colors = ['rgba(255, 251, 217, 0)', '#FFFBD9', '#ECD1E0', '#CEDFFF'];
  const locations = [0, 0.41, 0.72, 1];

  return (
    <SlipTemplate
      title={textJson.Slip.BaseProfile.Title}
      subtitle={textJson.Slip.BaseProfile.Subtitle}
      buttonText={textJson.Slip.BaseProfile.Next}
      colors={colors}
      locations={locations}
      onPress={() => navigation.navigate('Name')}
    />
  );
};

export default SlipDefaultProfile;
