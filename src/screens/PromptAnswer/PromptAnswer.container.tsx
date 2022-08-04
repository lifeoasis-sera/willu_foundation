import React, {useLayoutEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../../navigations/types';
import PromptAnswerView from './PromptAnswer.view';
import {IconButton, Typography} from '../../components';
import {ColorBundle} from '../../styles/color-bundle';
import {useDispatch} from 'react-redux';
import {addPrompt} from '../../store/user/reducer';
import {sectionQuestionsStorage} from '../PromptList/storage';
import {SectionType} from '../PromptList/PromptList.container';

const MAX_ANSWER = 140;
type Props = NativeStackScreenProps<PromptNavigationParams, 'Answer'>;
const PromptAnswerContainer = ({route, navigation}: Props) => {
  const sectionQuestions: SectionType[] = sectionQuestionsStorage;
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState(route.params.answer);

  let questionTitle = '';
  let placeholder = '';
  sectionQuestions.forEach(section => {
    if (section.key === route.params.sectionKey) {
      section.questions.forEach(question => {
        if (question.key === route.params.questionKey) {
          questionTitle = question.question;
          placeholder = question.placeHolder;
        }
      });
    }
  });

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
    dispatch(
      addPrompt({
        sectionKey: route.params.sectionKey,
        questionKey: route.params.questionKey,
        question: questionTitle,
        answer: answer,
      }),
    );
    navigation.navigate('Selected');
  }

  return (
    <PromptAnswerView
      data={{
        question: questionTitle,
        placeholder: placeholder,
        answer: answer || '',
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
