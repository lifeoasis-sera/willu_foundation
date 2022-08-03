import React, {ReactNode} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
  View,
  ViewStyle,
} from 'react-native';
import {Typography, ProgressBar} from '../../../components';
import {ColorBundle} from '../../../styles/color-bundle';

interface SignUpTemplateProps {
  title: string;
  subtitle?: string;
  icon?: ImageSourcePropType;
  subSubTitle?: ReactNode;
  style?: ViewStyle;
  progressBar?: {num: number; total: number};
  children?: ReactNode;
  shownHeaderTitle?: boolean;
}

const SignUpTemplate = (props: SignUpTemplateProps) => {
  const {
    title,
    subtitle,
    subSubTitle,
    icon,
    children,
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
      </View>
    </SafeAreaView>
  );
};

export default SignUpTemplate;
