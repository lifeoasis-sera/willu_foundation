import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../../navigations/types';
import PromptSelectedView from './PromptSelected.view';

export interface AnswerType {
  index: number;
  key?: string;
  title?: string;
  answer?: string;
}

type Props = NativeStackScreenProps<PromptNavigationParams, 'Selected'>;
const PromptSelectedContainer = ({navigation}: Props) => {
  const [answers, setAnswers] = useState<AnswerType[]>([
    {index: 0},
    {index: 1},
    {index: 2},
  ]);

  function deleteAnswer(index: number) {
    setAnswers(prev => {
      return prev.map(answer => {
        if (answer.index === index) {
          return {index: index};
        }
        return answer;
      });
    });
  }

  function selectQuestion() {
    navigation.navigate('List');
  }

  function submitPrompt() {
    console.log('===== done promt');
  }

  return (
    <PromptSelectedView
      data={{answers}}
      handle={{
        onDelete: deleteAnswer,
        onSubmit:
          answers.reduce(
            (prev, curr) => (curr.answer ? (prev += 1) : prev),
            0,
          ) === 3
            ? submitPrompt
            : undefined,
        onSelectQuestion: selectQuestion,
      }}
    />
  );
};

export default PromptSelectedContainer;
