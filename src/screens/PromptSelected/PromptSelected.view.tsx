import React from 'react';
import {Icon, IconButton, SignUpTemplate, Typography} from '../../components';
import {Pressable} from 'react-native';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';
import {AnswerType} from './PromptSelected.container';

interface PromptSelectedViewProps {
  data: {
    answers: AnswerType[];
    questionLength: number;
  };
  handle: {
    onSelectQuestion: () => void;
    onDelete: (sectionKey: string, questionKey: string) => void;
    onQuestion: (sectionKey: string, questionKey: string) => void;
    onSubmit?: () => void;
  };
}
const PromptSelectedView = (props: PromptSelectedViewProps) => {
  const {answers, questionLength} = props.data;
  const {onDelete, onQuestion, onSelectQuestion, onSubmit} = props.handle;
  const textJson = getTextJson();

  const RenderQuestionBox = (props: {answer?: AnswerType; index: number}) => {
    const {answer: item, index} = props;
    return (
      <Pressable
        onPress={
          item
            ? () => onQuestion(item.sectionKey, item.questionKey)
            : onSelectQuestion
        }
        style={{
          height: 108,
          borderRadius: 16,
          backgroundColor: ColorBundle.backGround,
          paddingVertical: 18,
          paddingHorizontal: 16,
          flexDirection: 'row',
          marginTop: index === 0 ? 0 : 12,
        }}>
        {item ? (
          <>
            <IconButton
              onPress={() => onDelete(item.sectionKey, item.questionKey)}
              icon={require('../../assets/image/icon/ic_xmark_circle_20.png')}
              size={20}
              backgroundColor={ColorBundle.transparent}
            />
            <Typography
              size={16}
              color={ColorBundle.textInfo}
              style={{marginLeft: 14}}>
              {item.question}
            </Typography>
          </>
        ) : (
          <>
            <Icon
              icon={require('../../assets/image/icon/ic_plus_circle_20.png')}
              size={20}
            />
            <Typography
              size={16}
              color={ColorBundle.textInfo}
              style={{marginLeft: 14}}>
              {textJson.SignUp.Prompt.Input}
            </Typography>
          </>
        )}
      </Pressable>
    );
  };

  return (
    <SignUpTemplate
      title={textJson.SignUp.Prompt.Title}
      guid={{text: textJson.SignUp.Prompt.Info}}
      progressBar={{total: 9, num: 9}}
      submitButton={
        <IconButton
          onPress={onSubmit}
          disable={!onSubmit}
          icon={require('../../assets/image/icon/ic_arrow_right.png')}
          size={24}
          radius={60}
          style={{margin: 16}}
          containerStyle={{alignSelf: 'flex-end'}}
        />
      }
      style={{paddingHorizontal: 24}}>
      {[...Array(questionLength).keys()].map((_, index) => {
        if (answers[index]) {
          return (
            <RenderQuestionBox
              key={answers[index].sectionKey + answers[index].questionKey}
              answer={answers[index]}
              index={index}
            />
          );
        }
        return <RenderQuestionBox key={index} index={index} />;
      })}
    </SignUpTemplate>
  );
};

export default PromptSelectedView;
