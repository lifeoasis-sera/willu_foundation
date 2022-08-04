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
    onSubmit?: () => void;
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
      progressBar={{num: 1, total: 9}}
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
      guid={
        warning
          ? {
              text: `${textJson.SignUp.Height.Alert}`,
              color: ColorBundle.activate,
            }
          : undefined
      }
      style={{paddingHorizontal: 24}}>
      <UnderLineInput
        keyboardType={'number-pad'}
        placeholder={textJson.SignUp.Height.Input}
        onChangeText={onChangeHeight}
        value={height}
        color={warning ? ColorBundle.activate : ColorBundle.textDefault}
        lineStyle={{width: 2}}
        suffix={
          <Typography size={24} bold={'400'}>
            cm
          </Typography>
        }
      />
    </SignUpTemplate>
  );
};

export default EditHeightView;
