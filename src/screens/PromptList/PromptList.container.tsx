import React, {useLayoutEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../../navigations/types';
import PromptListView from './PromptList.view';
import {sectionQuestionsStorage} from './storage';
import {IconButton, Typography} from '../../components';
import {ColorBundle} from '../../styles/color-bundle';

export interface SectionType {
  key: string;
  title: string;
  questions: QuestionType[];
}
export interface QuestionType {
  key: string;
  question: string;
  placeHolder: string;
  answer?: string;
}
type Props = NativeStackScreenProps<PromptNavigationParams, 'List'>;
const PromptListContainer = ({navigation}: Props) => {
  const sectionQuestions: SectionType[] = sectionQuestionsStorage;
  const [selectSectionKey, setSelectSectionKey] = useState('0');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerBackVisible: false,
      headerTitle: () => <Typography bold={'700'}>질문</Typography>,
      headerLeft: () => (
        <IconButton
          onPress={() => navigation.navigate('Selected')}
          icon={require('../../assets/image/icon/ic_x.png')}
          size={20}
          backgroundColor={ColorBundle.transparent}
          containerStyle={{marginRight: 20}}
          animation={false}
        />
      ),
    });
  });

  function selectSection(key: string) {
    setSelectSectionKey(key);
  }

  function selectSectionQuestions(sectionKey: string) {
    // TODO API : 질문 목록 가져오기
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

  function selectQuestion(sectionKey: string, questionKey: string) {
    let questionTitle = '';
    let placeholder = '';
    sectionQuestions.forEach(section => {
      if (section.key === sectionKey) {
        section.questions.forEach(question => {
          if (question.key === questionKey) {
            questionTitle = question.question;
            placeholder = question.placeHolder;
          }
        });
      }
    });

    navigation.navigate('Answer', {question: questionTitle, placeholder});
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
