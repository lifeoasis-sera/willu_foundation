import React from 'react';
import {SlipTemplate} from '../../components';
import {getTextJson} from '../../utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';

type Props = NativeStackScreenProps<
  SignUpNavigationParams,
  'SlipDefaultProfile'
>;
const SlipDetailProfile = ({navigation}: Props) => {
  const textJson = getTextJson();
  const coupleColors = [
    'rgba(255, 251, 217, 0)',
    '#FFFBD9',
    '#D4E5EC',
    '#BBBFD3',
  ];
  const locations = [0, 0.41, 0.72, 1];

  return (
    <SlipTemplate
      onPress={() => navigation.navigate('Height')}
      title={textJson.Slip.DetailProfile.CoupleTitle}
      subtitle={textJson.Slip.DetailProfile.Subtitle}
      buttonText={textJson.Slip.DetailProfile.Next}
      colors={coupleColors}
      locations={locations}
    />
  );
};

export default SlipDetailProfile;
