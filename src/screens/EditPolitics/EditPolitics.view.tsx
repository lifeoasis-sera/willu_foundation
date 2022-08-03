import React from 'react';
import {IconButton, RadioCard, SignUpTemplate} from '../../components';
import {getTextJson} from '../../utils';

interface EditPoliticsViewProps {
  data: {
    selected: '1' | '2' | '3' | '4' | undefined;
  };
  handle: {
    onSelect: (type: '1' | '2' | '3' | '4') => void;
    onSubmit: () => void;
  };
}

const EditPoliticsView = (props: EditPoliticsViewProps) => {
  const {selected} = props.data;
  const {onSelect, onSubmit} = props.handle;
  const textJson = getTextJson();

  return (
    <SignUpTemplate
      icon={require('../../assets/image/icon/ic_vote.png')}
      title={textJson.SignUp.Politics.Title}
      progressBar={{num: 2, total: 7}}
      style={{paddingHorizontal: 24}}>
      <RadioCard
        onSelect={() => onSelect('1')}
        text={textJson.SignUp.Politics.Option['1']}
        active={selected === '1'}
      />
      <RadioCard
        onSelect={() => onSelect('2')}
        text={textJson.SignUp.Politics.Option['2']}
        active={selected === '2'}
        style={{marginTop: 12}}
      />
      <RadioCard
        onSelect={() => onSelect('3')}
        text={textJson.SignUp.Politics.Option['3']}
        active={selected === '3'}
        style={{marginTop: 12}}
      />
      <RadioCard
        onSelect={() => onSelect('4')}
        text={textJson.SignUp.Politics.Option['4']}
        active={selected === '4'}
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

export default EditPoliticsView;
