import React from 'react';
import {IconButton, SignUpTemplate, UnderLineInput} from '../../components';
import {getTextJson} from '../../utils';
import {Image, Pressable} from 'react-native';

interface SignUpNameViewProps {
  data: {
    name: string;
    maxLength: number;
  };
  handle: {
    onChangeName: (name: string) => void;
    onSubmit: () => void;
  };
}

const SignUpNameView = (props: SignUpNameViewProps) => {
  const {name, maxLength} = props.data;
  const {onChangeName, onSubmit} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      title={textJson.SignUp.Name.Title}
      progressBar={{num: 2, total: 7}}
      style={{paddingHorizontal: 24}}>
      <UnderLineInput
        placeholder={textJson.SignUp.Name.Input}
        onChangeText={onChangeName}
        value={name}
        maxLength={maxLength}
        suffix={
          !!name && (
            <Pressable onPress={() => onChangeName('')}>
              <Image
                source={require('../../assets/image/icon/ic_xmark_circle_24.png')}
                style={{width: 24, height: 24}}
              />
            </Pressable>
          )
        }
      />
      <IconButton
        onPress={onSubmit}
        icon={require('../../assets/image/icon/ic_arrow_right.png')}
        size={{width: 29, height: 24}}
        disable={!name}
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

export default SignUpNameView;
