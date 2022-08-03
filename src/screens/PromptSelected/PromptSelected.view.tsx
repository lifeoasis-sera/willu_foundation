import React from 'react';
import {IconButton, SignUpTemplate, Typography} from '../../components';
import {ImageBackground, Pressable, View} from 'react-native';
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
    onSubmit: () => void;
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
          <Pressable onPress={() => onDelete(item.index)}>
            <ImageBackground
              source={require('../../assets/image/icon/ic_xmark_circle_20.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        ) : (
          <ImageBackground
            source={require('../../assets/image/icon/ic_plus_circle_20.png')}
            style={{width: 20, height: 20}}
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
      progressBar={{total: 7, num: 7}}
      style={{paddingHorizontal: 24}}>
      {answers.map(answer => (
        <RenderQuestionBox key={answer.index} answer={answer} />
      ))}
      <IconButton
        onPress={onSubmit}
        icon={require('../../assets/image/icon/ic_arrow_right.png')}
        size={{width: 29, height: 24}}
        containerStyle={{
          width: 56,
          height: 56,
          borderRadius: 60,
          marginTop: 73,
          alignSelf: 'flex-end',
        }}
      />
    </SignUpTemplate>
  );
};

export default PromptSelectedView;
