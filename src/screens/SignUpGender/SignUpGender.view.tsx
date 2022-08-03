import React, {useState} from 'react';
import {
  IconButton,
  RadioCard,
  SignUpTemplate,
  Typography,
} from '../../components';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';
import {GENDER_TYPE} from '../../assets/enum/type';

interface SignUpGenderViewProps {
  data: {
    selectedGender: GENDER_TYPE | undefined;
  };
  handle: {
    onSelectGender: (gender: GENDER_TYPE) => void;
    onSubmit: () => void;
  };
}

const SignUpGenderView = (props: SignUpGenderViewProps) => {
  const {selectedGender} = props.data;
  const {onSelectGender, onSubmit} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      title={textJson.SignUp.Gender.Title}
      progressBar={{num: 3, total: 7}}
      style={{paddingHorizontal: 24}}>
      <RadioCard
        onSelect={() => onSelectGender(GENDER_TYPE.FEMALE)}
        text={textJson.Enum.Gender.Female}
        active={selectedGender === GENDER_TYPE.FEMALE}
      />
      <RadioCard
        onSelect={() => onSelectGender(GENDER_TYPE.MALE)}
        text={textJson.Enum.Gender.Male}
        active={selectedGender === GENDER_TYPE.MALE}
        style={{marginTop: 12}}
      />
      <Typography
        size={16}
        color={ColorBundle.textInfo}
        center={true}
        style={{marginTop: 24}}>
        {textJson.Enum.Alert.CanNotFixInfo}
      </Typography>
      <IconButton
        disable={!selectedGender}
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

export default SignUpGenderView;
