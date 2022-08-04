import React from 'react';
import {IconButton, RadioCard, SignUpTemplate} from '../../components';
import {getTextJson} from '../../utils';

interface EditSmokeViewProps {
  data: {
    selected: '1' | '2' | '3' | undefined;
  };
  handle: {
    onSelect: (type: '1' | '2' | '3') => void;
    onSubmit: () => void;
  };
}

const EditSmokeView = (props: EditSmokeViewProps) => {
  const {selected} = props.data;
  const {onSelect, onSubmit} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      icon={require('../../assets/image/icon/ic_cigar.png')}
      title={textJson.SignUp.Smoke.Title}
      progressBar={{num: 2, total: 9}}
      submitButton={
        <IconButton
          radius={60}
          onPress={onSubmit}
          icon={require('../../assets/image/icon/ic_arrow_right.png')}
          size={24}
          style={{margin: 16}}
        />
      }
      style={{paddingHorizontal: 24}}>
      <RadioCard
        onSelect={() => onSelect('1')}
        text={textJson.SignUp.Smoke.Option['1']}
        active={selected === '1'}
      />
      <RadioCard
        onSelect={() => onSelect('2')}
        text={textJson.SignUp.Smoke.Option['2']}
        active={selected === '2'}
        style={{marginTop: 12}}
      />
      <RadioCard
        onSelect={() => onSelect('3')}
        text={textJson.SignUp.Smoke.Option['3']}
        active={selected === '3'}
        style={{marginTop: 12}}
      />
    </SignUpTemplate>
  );
};

export default EditSmokeView;
