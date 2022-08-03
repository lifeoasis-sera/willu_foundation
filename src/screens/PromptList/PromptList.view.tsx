import React from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {FlatButton, Typography} from '../../components';
import {QuestionType} from './PromptList.container';
import {ColorBundle} from '../../styles/color-bundle';

interface PromptListViewProps {
  data: {
    sections: {key: string; section: string; select: boolean}[];
    questions: QuestionType[];
  };
  handle: {
    onSelectSection: (key: string) => void;
    onSelectQuestion: (sectionKey: string, questionKey: string) => void;
  };
}
const PromptListView = (props: PromptListViewProps) => {
  const {sections, questions} = props.data;
  const {onSelectSection, onSelectQuestion} = props.handle;

  const selectSection = sections.filter(section => section.select)[0];

  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          flexShrink: 0,
          flexGrow: 0,
          paddingBottom: 12,
          borderBottomWidth: 1,
          borderBottomColor: ColorBundle.divider,
        }}>
        <View style={{flexDirection: 'row'}}>
          {sections.map((section, index) => {
            const hasSpace = section.section.indexOf(' ') !== -1;
            const sectionTitle = hasSpace
              ? section.section
              : ' ' + section.section + ' ';

            return (
              <FlatButton
                key={section.key}
                onPress={() => onSelectSection(section.key)}
                backgroundColor={
                  section.select ? ColorBundle.primary : ColorBundle.divider
                }
                textColor={section.select ? 'white' : ColorBundle.textThird}
                containerStyle={{
                  borderRadius: 26,
                  paddingHorizontal: 14,
                  paddingVertical: 12,
                  marginLeft: index === 0 ? 12 : 8,
                }}
                textStyle={{size: 14}}>
                {sectionTitle}
              </FlatButton>
            );
          })}
        </View>
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 64}}>
        <View style={{paddingHorizontal: 16}}>
          {questions.map(question => {
            return (
              <Pressable
                key={question.key}
                pointerEvents={'box-only'}
                onPress={() =>
                  onSelectQuestion(selectSection.key, question.key)
                }
                style={{
                  paddingVertical: 18,
                  borderBottomWidth: 1,
                  borderBottomColor: ColorBundle.divider,
                }}>
                <Typography size={16}>{question.question}</Typography>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PromptListView;
