import React from 'react';
import {Icon, IconButton, SignUpTemplate, Typography} from '../../components';
import {Pressable} from 'react-native';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';
import {AnswerType} from './PromptSelected.container';

interface PromptSelectedViewProps {
  data: {
    answers: AnswerType[];
  };
  handle: {
    onSelectQuestion: () => void;
    onDelete: (index: number) => void;
    onSubmit?: () => void;
  };
}
const PromptSelectedView = (props: PromptSelectedViewProps) => {
  const {answers} = props.data;
  const {onDelete, onSelectQuestion, onSubmit} = props.handle;
  const textJson = getTextJson();

  const RenderQuestionBox = (props: {answer: AnswerType}) => {
    const {answer: item} = props;
    return (
      <Pressable
        onPress={onSelectQuestion}
        pointerEvents={'box-only'}
        style={{
          height: 108,
          borderRadius: 16,
          backgroundColor: ColorBundle.backGround,
          paddingVertical: 18,
          paddingHorizontal: 16,
          flexDirection: 'row',
          marginTop: item.index === 0 ? 0 : 12,
        }}>
        {item.key ? (
          <IconButton
            onPress={() => onDelete(item.index)}
            icon={require('../../assets/image/icon/ic_xmark_circle_20.png')}
            size={20}
          />
        ) : (
          <Icon
            icon={require('../../assets/image/icon/ic_plus_circle_20.png')}
            size={20}
          />
        )}
        <Typography
          size={16}
          color={ColorBundle.textInfo}
          style={{marginLeft: 14}}>
          {textJson.SignUp.Prompt.Input}
        </Typography>
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
      {answers.map(answer => (
        <RenderQuestionBox key={answer.index} answer={answer} />
      ))}
    </SignUpTemplate>
  );
};

export default PromptSelectedView;
