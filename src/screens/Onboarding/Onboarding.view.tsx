import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {FlatButton, Typography} from '../../components';
import {ColorBundle} from '../../styles/color-bundle';

interface OnboardingViewProps {
  handle: {
    onSignUp: () => void;
    onTerms: () => void;
    onPrivacy: () => void;
  };
}

const OnboardingView = (props: OnboardingViewProps) => {
  const {onSignUp} = props.handle;
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'white'} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <Typography size={36}>Company Name</Typography>
          <Typography style={{marginTop: 26}}>
            진지한 인연을 원하는 직장인을 위해
          </Typography>
        </View>

        <View
          style={{
            left: 20,
            right: 20,
            position: 'absolute',
            bottom: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FlatButton display={'stretch'} onPress={onSignUp}>
            회사 메일로 시작하기
          </FlatButton>
          <Typography
            size={12}
            lineHeight={1.6}
            color={ColorBundle.textThird}
            style={{marginTop: 16}}>
            가입 시 이용약관 및 개인정보 취급방침에 동의하게 됩니다.
          </Typography>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingView;
