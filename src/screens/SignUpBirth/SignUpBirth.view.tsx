import React from 'react';
import {CheckBirthModal, IconButton, SignUpTemplate} from '../../components';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';
import {BirthdayField} from './BirthInput';

interface SignUpBirthViewProps {
  data: {
    birth: string;
    modalVisible: boolean;
    validYear: boolean;
  };
  handle: {
    onChangeBirth: (birth: string) => void;
    openModal: () => void;
    closeModal: () => void;
    onSubmit?: () => void;
  };
}

const SignUpBirthView = (props: SignUpBirthViewProps) => {
  const {birth, modalVisible, validYear} = props.data;
  const {onChangeBirth, onSubmit, openModal, closeModal} = props.handle;

  const textJson = getTextJson();

  return (
    <SignUpTemplate
      title={textJson.SignUp.Birth.Title}
      subtitle={textJson.SignUp.Birth.Subtitle}
      guid={{
        text: validYear
          ? `${textJson.Enum.Alert.CanNotFixInfo}`
          : `${textJson.SignUp.Birth.AgeLimit}`,
        color: validYear ? ColorBundle.textInfo : ColorBundle.activate,
      }}
      progressBar={{num: 3, total: 5}}
      submitButton={
        <IconButton
          radius={60}
          onPress={openModal}
          disable={!onSubmit}
          icon={require('../../assets/image/icon/ic_arrow_right.png')}
          size={24}
          style={{margin: 16}}
        />
      }
      style={{paddingHorizontal: 24}}>
      <BirthdayField
        value={birth}
        setValue={onChangeBirth}
        onChangeText={onChangeBirth}
        underAge={!validYear}
      />
      {birth.length === 8 && (
        <CheckBirthModal
          visible={modalVisible}
          year={+birth.slice(0, 4)}
          month={+birth.slice(4, 6)}
          date={+birth.slice(6, 8)}
          onConfirm={onSubmit}
          onClose={closeModal}
        />
      )}
    </SignUpTemplate>
  );
};

export default SignUpBirthView;
