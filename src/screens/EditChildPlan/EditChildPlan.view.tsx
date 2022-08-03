import React from 'react';
import {IconButton, RadioCard, SignUpTemplate} from '../../components';
import {getTextJson} from '../../utils';

interface EditChildPlanViewProps {
  data: {
    selected: '1' | '2' | '3' | undefined;
  };
  handle: {
    onSelect: (type: '1' | '2' | '3') => void;
    onSubmit: () => void;
  };
}

const EditChildPlanView = (props: EditChildPlanViewProps) => {
  const {selected} = props.data;
  const {onSubmit, onSelect} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      icon={require('../../assets/image/icon/ic_baby.png')}
      title={textJson.SignUp.ChildPlan.Title}
      progressBar={{num: 4, total: 7}}
      style={{paddingHorizontal: 24}}>
      <RadioCard
        onSelect={() => onSelect('1')}
        text={textJson.SignUp.ChildPlan.Option['1']}
        active={selected === '1'}
      />
      <RadioCard
        onSelect={() => onSelect('2')}
        text={textJson.SignUp.ChildPlan.Option['2']}
        active={selected === '2'}
        style={{marginTop: 12}}
      />
      <RadioCard
        onSelect={() => onSelect('3')}
        text={textJson.SignUp.ChildPlan.Option['3']}
        active={selected === '3'}
        style={{marginTop: 12}}
      />
      <IconButton
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

export default EditChildPlanView;
