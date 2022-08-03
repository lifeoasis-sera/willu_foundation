import React, {ReactNode} from 'react';
import {
  ColorValue,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  View,
  ViewStyle,
} from 'react-native';
import {ProgressBar, Typography} from '../../../components';
import {ColorBundle} from '../../../styles/color-bundle';

interface SignUpTemplateProps {
  title: string;
  subtitle?: string;
  guid?: {text: string; color?: ColorBundle | ColorValue};
  icon?: ImageSourcePropType;
  subSubTitle?: ReactNode;
  style?: ViewStyle;
  progressBar?: {num: number; total: number};
  submitButton?: ReactNode;
  children?: ReactNode;
  shownHeaderTitle?: boolean;
}

const SignUpTemplate = (props: SignUpTemplateProps) => {
  const {
    title,
    subtitle,
    guid,
    subSubTitle,
    icon,
    children,
    submitButton,
    style: childrenStyle,
    progressBar,
    shownHeaderTitle = false,
  } = props;

  // 처음 progress bar를 많이 채워서 몇단계 남지 않은 것처럼 표기
  const percent =
    progressBar && ((progressBar.num + 3) / (progressBar.total + 3)) * 100;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 144}}>
        {percent && (
          <View style={{marginTop: 12, paddingHorizontal: 16, width: '100%'}}>
            <ProgressBar height={4} width={'100%'} percent={percent} />
          </View>
        )}

        <View style={{marginTop: 24, paddingHorizontal: 24}}>
          {!!icon && !subtitle && (
            <ImageBackground
              source={icon}
              style={{width: 32, height: 32, marginBottom: 8, marginLeft: 2}}
            />
          )}

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Typography
              size={28}
              lineHeight={1.5}
              bold={'700'}
              lineBreak={true}>
              {title}
            </Typography>
            {!!icon && !!subtitle && (
              <ImageBackground
                source={icon}
                style={{width: 32, height: 32, marginLeft: 4}}
              />
            )}
          </View>

          {!!subtitle && (
            <Typography
              lineHeight={1.6}
              color={ColorBundle.textThird}
              lineBreak={true}
              style={{marginTop: 3}}>
              {subtitle}
            </Typography>
          )}

          {subSubTitle}
        </View>
      </View>

      <View
        style={[
          {flex: 1, marginTop: shownHeaderTitle ? 48 : 24},
          childrenStyle,
        ]}>
        {children}
        {guid && (
          <Typography
            size={16}
            color={guid?.color || ColorBundle.textInfo}
            center={true}
            style={{marginTop: 20}}>
            {guid.text}
          </Typography>
        )}
      </View>
      <View style={{marginBottom: 20, marginRight: 24, alignSelf: 'flex-end'}}>
        {submitButton}
      </View>
    </SafeAreaView>
  );
};

export default SignUpTemplate;
