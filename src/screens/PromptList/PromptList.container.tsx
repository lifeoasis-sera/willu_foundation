import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../../navigations/types';
import PromptListView from './PromptList.view';

export interface SectionType {
  key: string;
  title: string;
  questions: QuestionType[];
}
export interface QuestionType {
  key: string;
  question: string;
  answer?: string;
}
type Props = NativeStackScreenProps<PromptNavigationParams, 'List'>;
const PromptListContainer = ({navigation}: Props) => {
  const [sectionQuestions, setSectionQuestions] = useState<SectionType[]>([
    {
      key: '0',
      title: '나에 대해서',
      questions: [
        {key: '0-1', question: '나의 특별한 능력은'},
        {key: '0-2', question: '평소에 주말을 보내는 방법은'},
        {key: '0-3', question: '인생의 목표 또는 비전이 있다면'},
        {key: '0-4', question: '나의 특별한 능력은'},
        {key: '0-5', question: '평소에 주말을 보내는 방법은'},
        {key: '0-6', question: '인생의 목표 또는 비전이 있다면'},
        {key: '0-7', question: '나의 특별한 능력은'},
        {key: '0-8', question: '평소에 주말을 보내는 방법은'},
        {key: '0-9', question: '인생의 목표 또는 비전이 있다면'},
        {key: '0-10', question: '나의 특별한 능력은'},
        {key: '0-11', question: '평소에 주말을 보내는 방법은'},
        {key: '0-12', question: '인생의 목표 또는 비전이 있다면'},
        {key: '0-13', question: '나의 특별한 능력은'},
        {key: '0-14', question: '평소에 주말을 보내는 방법은'},
        {key: '0-15', question: '인생의 목표 또는 비전이 있다면'},
        {key: '0-16', question: '나의 특별한 능력은'},
        {key: '0-17', question: '평소에 주말을 보내는 방법은'},
        {key: '0-18', question: '인생의 목표 또는 비전이 있다면'},
      ],
    },
    {
      key: '1',
      title: ' 관계',
      questions: [
        {key: '1-1', question: '나의 소소한 행복은'},
        {key: '1-2', question: '올해 꼭 하고 싶은 일은'},
        {key: '1-3', question: '내 성격의 가장 큰 장점은'},
      ],
    },
    {
      key: '3',
      title: '관계',
      questions: [
        {key: '3-1', question: '나의 소소한 행복은'},
        {key: '3-2', question: '올해 꼭 하고 싶은 일은'},
        {key: '3-3', question: '내 성격의 가장 큰 장점은'},
      ],
    },
    {
      key: '2',
      title: '나에대해서',
      questions: [
        {key: '2-1', question: '나의 특별한 능력은'},
        {key: '2-2', question: '평소에 주말을 보내는 방법은'},
        {key: '2-3', question: '인생의 목표 또는 비전이 있다면'},
      ],
    },
    {
      key: '4',
      title: '나에 대해서',
      questions: [
        {key: '4-1', question: '나의 특별한 능력은'},
        {key: '4-2', question: '평소에 주말을 보내는 방법은'},
        {key: '4-3', question: '인생의 목표 또는 비전이 있다면'},
      ],
    },
    {
      key: '5',
      title: ' 관계',
      questions: [
        {key: '5-1', question: '나의 소소한 행복은'},
        {key: '5-2', question: '올해 꼭 하고 싶은 일은'},
        {key: '5-3', question: '내 성격의 가장 큰 장점은'},
      ],
    },
    {
      key: '6',
      title: '관계',
      questions: [
        {key: '6-1', question: '나의 소소한 행복은'},
        {key: '6-2', question: '올해 꼭 하고 싶은 일은'},
        {key: '6-3', question: '내 성격의 가장 큰 장점은'},
      ],
    },
    {
      key: '7',
      title: '나에대해서',
      questions: [
        {key: '7-1', question: '나의 특별한 능력은'},
        {key: '7-2', question: '평소에 주말을 보내는 방법은'},
        {key: '7-3', question: '인생의 목표 또는 비전이 있다면'},
      ],
    },
  ]);
  const [selectSectionKey, setSelectSectionKey] = useState('0');

  function selectSection(key: string) {
    setSelectSectionKey(key);
  }

  function selectSectionQuestions(sectionKey: string) {
    return sectionQuestions.filter(section => section.key === sectionKey)[0]
      .questions;
  }

  function getSectionList() {
    return sectionQuestions.map(section => ({
      section: section.title,
      key: section.key,
      select: section.key === selectSectionKey,
    }));
  }

  function selectQuestion(key: string) {
    let questionTitle = '';
    sectionQuestions.forEach(section => {
      const target = section.questions.filter(ele => ele.key === key);
      questionTitle = target[0].question;
    });

    navigation.navigate('Answer', {question: questionTitle});
  }

  return (
    <PromptListView
      data={{
        sections: getSectionList(),
        questions: selectSectionQuestions(selectSectionKey),
      }}
      handle={{
        onSelectSection: selectSection,
        onSelectQuestion: selectQuestion,
      }}
    />
  );
};

export default PromptListContainer;
