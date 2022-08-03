import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import {Typography} from '../../components';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';

interface PromptAnswerViewProps {
  data: {
    question: string;
    placeholder: string;
    answer?: string;
    maxAnswer: number;
  };
  handle: {
    onChangeAnswer: (answer: string) => void;
    onClose: () => void;
  };
}
const PromptAnswerView = (props: PromptAnswerViewProps) => {
  const {question, placeholder, answer, maxAnswer} = props.data;
  const {onChangeAnswer, onClose} = props.handle;
  const textJson = getTextJson();

  function calcNumOfAnswer() {
    const answerLength = answer?.length || 0;
    return maxAnswer - answerLength;
  }

  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 18,
            paddingTop: 40,
            borderBottomColor: ColorBundle.divider,
            borderBottomWidth: 1,
          }}>
          <Typography>{question}</Typography>
          <Pressable onPress={onClose}>
            <ImageBackground
              source={require('../../assets/image/icon/ic_pen.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable>
        </View>
        <Typography
          color={
            calcNumOfAnswer() ? ColorBundle.textDefault : ColorBundle.activate
          }>
          {'' + calcNumOfAnswer()}
        </Typography>
        <TextInput
          placeholder={placeholder}
          value={answer}
          onChangeText={onChangeAnswer}
          multiline={true}
          autoFocus={true}
          maxLength={maxAnswer}
          style={{
            marginTop: 16,
            fontSize: 18,
            fontWeight: '500',
            lineHeight: 18 * 1.6,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PromptAnswerView;
