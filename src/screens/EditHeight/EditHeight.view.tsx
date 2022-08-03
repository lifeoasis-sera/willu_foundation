import React from 'react';
import {
  IconButton,
  SignUpTemplate,
  Typography,
  UnderLineInput,
} from '../../components';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';

interface EditHeightViewProps {
  data: {
    height: string;
    warning: boolean;
  };
  handle: {
    onChangeHeight: (height: string) => void;
    onSubmit: () => void;
  };
}

const EditHeightView = (props: EditHeightViewProps) => {
  const {height, warning} = props.data;
  const {onChangeHeight, onSubmit} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      icon={require('../../assets/image/icon/ic_ruler.png')}
      title={textJson.SignUp.Height.Title}
      progressBar={{num: 1, total: 7}}
      style={{paddingHorizontal: 24}}>
      <UnderLineInput
        keyboardType={'number-pad'}
        placeholder={textJson.SignUp.Height.Input}
        onChangeText={onChangeHeight}
        value={height}
        color={warning ? ColorBundle.activate : ColorBundle.textDefault}
        suffix={
          <Typography size={24} bold={'400'}>
            cm
          </Typography>
        }
      />
      {warning && (
        <Typography
          size={16}
          color={ColorBundle.activate}
          center={true}
          style={{marginTop: 24}}>
          {textJson.SignUp.Height.Alert}
        </Typography>
      )}
      <IconButton
        onPress={onSubmit}
        icon={require('../../assets/image/icon/ic_arrow_right.png')}
        size={{width: 29, height: 24}}
        disable={!height}
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

export default EditHeightView;
