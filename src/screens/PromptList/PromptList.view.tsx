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
    onSelectQuestion: (key: string) => void;
  };
}
const PromptListView = (props: PromptListViewProps) => {
  const {sections, questions} = props.data;
  const {onSelectSection, onSelectQuestion} = props.handle;

  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{flexGrow: 0}}>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 12,
            borderBottomWidth: 1,
            borderBottomColor: ColorBundle.divider,
          }}>
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
                onPress={() => onSelectQuestion(question.key)}
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