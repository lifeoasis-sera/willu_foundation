import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import {FlatButton, Typography} from '../../components';
import {ColorBundle} from '../../styles/color-bundle';
import {getTextJson} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

interface OnboardingViewProps {
  handle: {
    onSignUp: () => void;
    onTerms: () => void;
    onPrivacy: () => void;
  };
}

const {height} = Dimensions.get('window');
const OnboardingView = (props: OnboardingViewProps) => {
  const {onSignUp, onPrivacy, onTerms} = props.handle;
  const textJson = getTextJson();

  const terms = textJson.Onboarding.Terms;
  const termsList: {text: string; option: boolean}[] = terms
    .split('<underline>')
    .flatMap((text: string, index1: number) => {
      const list = text.split('</underline>');
      return list.map((ele, index2) => {
        if (index1 > 0 && index2 === 0) {
          return {text: ele, option: true};
        }
        return {text: ele, option: false};
      });
    });

  const colors = ['rgba(255, 251, 217, 0)', '#FFFBD9', '#ECD1E0', '#CEDFFF'];
  const locations = [0, 0.4, 0.7, 1].reverse();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          // 임의 가운데 위치값
          top: height / 2 - 70,
          alignSelf: 'center',
          position: 'absolute',
          zIndex: 1,
        }}>
        <View>
          <Typography size={36}>Company Name</Typography>
          <Typography style={{marginTop: 26}}>
            {textJson.Onboarding.Subtitle}
          </Typography>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <LinearGradient
          colors={colors}
          locations={locations}
          style={{height: '100%'}}
        />
        <View style={{paddingHorizontal: 20, marginBottom: 24}}>
          <FlatButton display={'stretch'} onPress={onSignUp}>
            {textJson.Onboarding.Next}
          </FlatButton>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {termsList.map(({text, option}, index) => {
              return (
                <Typography
                  key={text + index}
                  onPress={option && index === 1 ? onTerms : onPrivacy}
                  underLine={option}
                  size={12}
                  lineHeight={1.6}
                  color={ColorBundle.textThird}
                  style={{marginTop: 16}}>
                  {text}
                </Typography>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingView;
