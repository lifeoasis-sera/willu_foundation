import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {FlatButton, Typography} from '../../../components';
import {ColorBundle} from '../../../styles/color-bundle';
import LinearGradient from 'react-native-linear-gradient';

interface SlipProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onPress?: () => void;
  colors?: string[];
  locations?: number[];
}

const Slip = (props: SlipProps) => {
  const {title, subtitle, buttonText, onPress, colors, locations} = props;

  const TitleSubtitle = (props: {title: string; subtitle: string}) => {
    const {title, subtitle} = props;

    return (
      <View
        style={{flex: 1, paddingHorizontal: 24, justifyContent: 'flex-end'}}>
        <Typography size={28} bold={'700'} lineHeight={1.5} lineBreak={true}>
          {title}
        </Typography>
        <Typography
          lineHeight={1.6}
          color={ColorBundle.textThird}
          style={{marginTop: 8}}
          lineBreak={true}>
          {subtitle}
        </Typography>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
      {colors ? (
        <LinearGradient
          colors={colors}
          locations={locations?.reverse()}
          style={{height: '100%'}}>
          <TitleSubtitle title={title} subtitle={subtitle} />
        </LinearGradient>
      ) : (
        <TitleSubtitle title={title} subtitle={subtitle} />
      )}
      <View style={{paddingHorizontal: 20, marginTop: 52, marginBottom: 24}}>
        <FlatButton display={'stretch'} onPress={onPress}>
          {buttonText}
        </FlatButton>
      </View>
    </SafeAreaView>
  );
};

export default Slip;
