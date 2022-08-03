import React from 'react';
import {
  CheckBirthModal,
  IconButton,
  SignUpTemplate,
  Typography,
} from '../../components';
import {useBlurOnFulfill} from 'react-native-confirmation-code-field';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';
import {BirthdayField} from './BirthInput';

interface SignUpBirthViewProps {
  data: {
    birth: string;
    modalVisible: boolean;
    validYear: boolean;
    availability: boolean;
  };
  handle: {
    onChangeBirth: (birth: string) => void;
    onSubmit: () => void;
    openModal: () => void;
    closeModal: () => void;
  };
}

const SignUpBirthView = (props: SignUpBirthViewProps) => {
  const {birth, modalVisible, validYear, availability} = props.data;
  const {onChangeBirth, onSubmit, openModal, closeModal} = props.handle;

  const textJson = getTextJson();
  const dateRef = useBlurOnFulfill({value: birth, cellCount: 8});

  return (
    <SignUpTemplate
      title={textJson.SignUp.Birth.Title}
      subtitle={textJson.SignUp.Birth.Subtitle}
      progressBar={{num: 4, total: 7}}
      style={{paddingHorizontal: 24}}>
      <BirthdayField
        ref={dateRef}
        value={birth}
        setValue={onChangeBirth}
        onChangeText={onChangeBirth}
        underAge={!validYear}
      />
      {validYear ? (
        <Typography
          size={16}
          color={ColorBundle.textInfo}
          center={true}
          style={{marginTop: 24}}>
          {textJson.Enum.Alert.CanNotFixInfo}
        </Typography>
      ) : (
        <Typography
          size={16}
          color={ColorBundle.activate}
          center={true}
          style={{marginTop: 24}}>
          {textJson.SignUp.Birth.AgeLimit}
        </Typography>
      )}

      <IconButton
        onPress={openModal}
        icon={require('../../assets/image/icon/ic_arrow_right.png')}
        size={{width: 29, height: 24}}
        disable={!availability}
        containerStyle={{
          width: 56,
          height: 56,
          borderRadius: 60,
          marginTop: 73,
          alignSelf: 'flex-end',
        }}
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
