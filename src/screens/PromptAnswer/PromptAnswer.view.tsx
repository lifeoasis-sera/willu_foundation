import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import {IconButton, Typography} from '../../components';
import {ColorBundle} from '../../styles/color-bundle';

interface PromptAnswerViewProps {
  data: {
    question: string;
    placeholder: string;
    answer: string;
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

  function calcNumOfAnswer() {
    return maxAnswer - answer.length;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}>
        <View style={{flex: 1, marginHorizontal: 20, marginBottom: 24 + 18}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 18,
              paddingTop: 40,
            }}>
            <Typography>{question}</Typography>
            <IconButton
              icon={require('../../assets/image/icon/ic_pen.png')}
              size={20}
              onPress={onClose}
              backgroundColor={ColorBundle.transparent}
              animation={false}
            />
          </View>
          <TextInput
            placeholder={placeholder}
            value={answer}
            onChangeText={onChangeAnswer}
            multiline={true}
            autoFocus={true}
            maxLength={maxAnswer}
            style={{
              borderTopColor: ColorBundle.divider,
              borderTopWidth: 1,
              paddingTop: 16,
              fontSize: 18,
              fontWeight: '500',
              lineHeight: 18 * 1.6,
            }}
          />
        </View>
        <Typography
          style={{alignSelf: 'flex-end', marginRight: 20, marginBottom: 16}}
          color={
            calcNumOfAnswer() ? ColorBundle.textThird : ColorBundle.activate
          }>
          {'' + calcNumOfAnswer()}
        </Typography>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PromptAnswerView;
