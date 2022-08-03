import React, {useLayoutEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../../navigations/types';
import PromptAnswerView from './PromptAnswer.view';
import {Typography} from '../../components';
import {ColorBundle} from '../../styles/color-bundle';
import {ImageBackground, Pressable} from 'react-native';

const MAX_ANSWER = 10; //140;
type Props = NativeStackScreenProps<PromptNavigationParams, 'Answer'>;
const PromptAnswerContainer = ({route, navigation}: Props) => {
  const [answer, setAnswer] = useState<string>();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShadowVisible: false,
      title: '답변 작성',
      headerLeft: () => (
        <Pressable onPress={goPromptSelected} style={{marginRight: 20}}>
          <ImageBackground
            source={require('../../assets/image/icon/ic_xmark_circle_24.png')}
            style={{width: 20, height: 20}}
          />
        </Pressable>
      ),
      headerRight: () => (
        <Typography
          onPress={checkCanSubmit() ? submitAnswer : undefined}
          size={16}
          bold={'700'}
          color={ColorBundle.primary}
          style={{opacity: checkCanSubmit() ? 1 : 0.3}}>
          완료
        </Typography>
      ),
    });
  });

  function checkCanSubmit() {
    if (answer) {
      const refineAnswer = answer.trimStart();
      return refineAnswer.length >= 3;
    }
    return false;
  }

  function goPromptSelected() {
    navigation.navigate('Selected');
  }

  function goPromptList() {
    navigation.navigate('List');
  }

  function submitAnswer() {
    // TODO API : 답변 저장
    navigation.navigate('Selected');
  }

  return (
    <PromptAnswerView
      data={{
        question: route.params.question,
        placeholder: route.params.placeholder,
        answer: answer,
        maxAnswer: MAX_ANSWER,
      }}
      handle={{
        onChangeAnswer: setAnswer,
        onClose: goPromptList,
      }}
    />
  );
};

export default PromptAnswerContainer;
