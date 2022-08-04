import React, {useLayoutEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../../navigations/types';
import PromptAnswerView from './PromptAnswer.view';
import {IconButton, Typography} from '../../components';
import {ColorBundle} from '../../styles/color-bundle';

const MAX_ANSWER = 140;
type Props = NativeStackScreenProps<PromptNavigationParams, 'Answer'>;
const PromptAnswerContainer = ({route, navigation}: Props) => {
  const [answer, setAnswer] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: true,
      headerBackVisible: false,
      headerTitle: () => <Typography bold={'700'}>답변 작성</Typography>,
      headerLeft: () => (
        <IconButton
          onPress={goPromptSelected}
          icon={require('../../assets/image/icon/ic_x.png')}
          size={20}
          backgroundColor={ColorBundle.transparent}
          containerStyle={{marginRight: 20}}
          animation={false}
        />
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
