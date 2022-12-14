import React from 'react';
import {IconButton, SignUpTemplate, UnderLineInput} from '../../components';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';

interface SignUpNameViewProps {
  data: {
    name: string;
    maxLength: number;
  };
  handle: {
    onChangeName: (name: string) => void;
    onSubmit?: () => void;
  };
}

const SignUpNameView = (props: SignUpNameViewProps) => {
  const {name, maxLength} = props.data;
  const {onChangeName, onSubmit} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      title={textJson.SignUp.Name.Title}
      progressBar={{num: 1, total: 5}}
      submitButton={
        <IconButton
          radius={60}
          onPress={onSubmit}
          disable={!onSubmit}
          icon={require('../../assets/image/icon/ic_arrow_right.png')}
          size={24}
          style={{margin: 16}}
        />
      }
      style={{paddingHorizontal: 24}}>
      <UnderLineInput
        onSubmit={onSubmit}
        placeholder={textJson.SignUp.Name.Input}
        onChangeText={onChangeName}
        value={name}
        maxLength={maxLength}
        lineStyle={{width: 2}}
        suffix={
          !!name && (
            <IconButton
              onPress={() => onChangeName('')}
              icon={require('../../assets/image/icon/ic_xmark_circle_24.png')}
              size={24}
              containerStyle={{backgroundColor: ColorBundle.transparent}}
            />
          )
        }
      />
    </SignUpTemplate>
  );
};

export default SignUpNameView;
