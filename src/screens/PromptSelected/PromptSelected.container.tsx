import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../../navigations/types';
import PromptSelectedView from './PromptSelected.view';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {deletePrompt} from '../../store/user/reducer';

export interface AnswerType {
  sectionKey: string;
  questionKey: string;
  question: string;
  answer: string;
}

const MAX_LENGTH = 3;
type Props = NativeStackScreenProps<PromptNavigationParams, 'Selected'>;
const PromptSelectedContainer = ({navigation}: Props) => {
  const answersStore = useSelector((state: RootState) => state.user.prompt);
  const [answers, setAnswers] = useState(answersStore);
  const dispatch = useDispatch();

  useEffect(() => {
    setAnswers(answersStore);
  }, [answersStore]);

  function deleteAnswer(sectionKey: string, questionKey: string) {
    // TODO API : 삭제
    dispatch(deletePrompt({sectionKey, questionKey}));
  }

  function selectQuestion() {
    navigation.navigate('List');
  }

  function submitPrompt() {
    console.log('===== done promt');
  }

  function goAnswerPage(sectionKey: string, questionKey: string) {
    const answer = answers.find(
      answer =>
        answer.sectionKey === sectionKey && answer.questionKey === questionKey,
    );
    navigation.navigate('Answer', {
      sectionKey,
      questionKey,
      answer: answer?.answer,
    });
  }

  return (
    <PromptSelectedView
      data={{answers, questionLength: MAX_LENGTH}}
      handle={{
        onDelete: deleteAnswer,
        onQuestion: goAnswerPage,
        onSelectQuestion: selectQuestion,
        onSubmit:
          answers.reduce(
            (prev, curr) => (curr.answer ? (prev += 1) : prev),
            0,
          ) === 3
            ? submitPrompt
            : undefined,
      }}
    />
  );
};

export default PromptSelectedContainer;
