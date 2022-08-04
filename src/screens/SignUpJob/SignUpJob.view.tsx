import React from 'react';
import {IconButton, SignUpTemplate, UnderLineInput} from '../../components';
import {getTextJson} from '../../utils';
import {ColorBundle} from '../../styles/color-bundle';

interface SignUpJobViewProps {
  data: {
    job: string;
    maxLength: number;
  };
  handle: {
    onChangeJob: (job: string) => void;
    onSubmit?: () => void;
  };
}

const SignUpJobView = (props: SignUpJobViewProps) => {
  const {job, maxLength} = props.data;
  const {onChangeJob, onSubmit} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      title={textJson.SignUp.Job.Title}
      subtitle={textJson.SignUp.Job.Subtitle}
      progressBar={{num: 5, total: 5}}
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
        maxLength={maxLength}
        placeholder={textJson.SignUp.Job.Input}
        onChangeText={onChangeJob}
        value={job}
        onSubmit={onSubmit}
        lineStyle={{width: 2}}
        suffix={
          !!onSubmit && (
            <IconButton
              onPress={() => onChangeJob('')}
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

export default SignUpJobView;
