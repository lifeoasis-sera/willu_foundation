import React from 'react';
import {IconButton, RadioCard, SignUpTemplate} from '../../components';
import {getTextJson} from '../../utils';
import {GENDER_TYPE} from '../../assets/enum/type';

interface SignUpGenderViewProps {
  data: {
    selectedGender: GENDER_TYPE | undefined;
  };
  handle: {
    onSelectGender: (gender: GENDER_TYPE) => void;
    onSubmit?: () => void;
  };
}

const SignUpGenderView = (props: SignUpGenderViewProps) => {
  const {selectedGender} = props.data;
  const {onSelectGender, onSubmit} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      title={textJson.SignUp.Gender.Title}
      progressBar={{num: 2, total: 5}}
      guid={{text: `${textJson.Enum.Alert.CanNotFixInfo}`}}
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
    </SignUpTemplate>
  );
};

export default SignUpGenderView;
