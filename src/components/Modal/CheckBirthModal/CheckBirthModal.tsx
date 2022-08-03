import React from 'react';
import {BaseModal} from '../index';
import {getTextJson, getOnlyAge} from '../../../utils';
import {Typography} from '../../Texts';
import {ColorBundle} from '../../../styles/color-bundle';
import {View} from 'react-native';
import {FlatButton} from '../../Buttons';
import DotList from '../../Texts/DotText';

interface CheckBirthModalProps {
  visible: boolean;
  year: number;
  month: number;
  date: number;
  onConfirm?: () => void;
  onClose?: () => void;
}

const CheckBirthModal = (props: CheckBirthModalProps) => {
  const {visible, year, month, date, onConfirm, onClose} = props;
  const textJson = getTextJson();

  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      closeButtonText={textJson.SignUp.Modal.Birth.Cancel}
      containerStyle={{marginHorizontal: 16}}
      modalStyle={{
        paddingTop: 32,
        paddingBottom: 20,
        width: '100%',
      }}>
      <View style={{paddingHorizontal: 24}}>
        <Typography size={28} bold={'700'} lineHeight={1.5}>
          {textJson.SignUp.Modal.Birth.Title}
        </Typography>
        <Typography
          size={16}
          lineHeight={1.6}
          color={ColorBundle.activate}
          style={{marginTop: 8}}>
          {textJson.Enum.Alert.CanNotFixInfo}
        </Typography>
        <View style={{marginTop: 47}}>
          <DotList size={24} lineHeight={1.5} color={ColorBundle.textSecondary}>
            {`만 ${getOnlyAge(year, month, date)}세 \n ${year}${
              textJson.Enum.Date.Year
            } ${month}${textJson.Enum.Date.Month} ${date}${
              textJson.Enum.Date.Day
            }`}
          </DotList>
        </View>
      </View>
      <View style={{marginTop: 69, paddingHorizontal: 20}}>
        <FlatButton display={'stretch'} onPress={onConfirm}>
          {textJson.SignUp.Modal.Birth.Confirm}
        </FlatButton>
      </View>
    </BaseModal>
  );
};

export default CheckBirthModal;
