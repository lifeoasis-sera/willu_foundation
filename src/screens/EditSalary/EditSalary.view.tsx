import React from 'react';
import {IconButton, SignUpTemplate, Typography} from '../../components';
import {getTextJson} from '../../utils';
import {Pressable, View, ViewStyle} from 'react-native';
import {ColorBundle} from '../../styles/color-bundle';

interface EditSalaryViewProps {
  data: {
    selected: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
  };
  handle: {
    onSelect: (type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) => void;
    onSubmit: () => void;
  };
}

const EditSalaryView = (props: EditSalaryViewProps) => {
  const {selected} = props.data;
  const {onSelect, onSubmit} = props.handle;
  const textJson = getTextJson();

  const SelectCard = (props: {
    text: string;
    onSelect: () => void;
    active?: boolean;
    style?: ViewStyle;
  }) => {
    const {text, onSelect, style, active} = props;
    return (
      <Pressable onPress={onSelect} pointerEvents={'box-only'}>
        <View
          style={[
            {
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              backgroundColor: ColorBundle.backGround,
              paddingVertical: 17,
              alignItems: 'center',
              borderColor: active
                ? ColorBundle.primary
                : ColorBundle.backGround,
              borderWidth: 2,
            },
            style,
          ]}>
          <Typography color={ColorBundle.textSecondary}>{text}</Typography>
        </View>
      </Pressable>
    );
  };

  return (
    <SignUpTemplate
      icon={require('../../assets/image/icon/ic_locker.png')}
      title={textJson.SignUp.Salary.Title}
      subtitle={textJson.SignUp.Salary.Subtitle}
      progressBar={{num: 7, total: 9}}
      guid={{
        text: `${textJson.Enum.Alert.NotOpenInfo}`,
        color: ColorBundle.activate,
      }}
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
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <SelectCard
            onSelect={() => onSelect(1)}
            text={textJson.SignUp.Salary.Option['1']}
            active={selected === 1}
          />
        </View>
        <View style={{marginLeft: 12, flex: 1}}>
          <SelectCard
            onSelect={() => onSelect(2)}
            text={textJson.SignUp.Salary.Option['2']}
            active={selected === 2}
          />
        </View>
      </View>
      <View style={{marginTop: 12, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <SelectCard
            onSelect={() => onSelect(3)}
            text={textJson.SignUp.Salary.Option['3']}
            active={selected === 3}
          />
        </View>
        <View style={{marginLeft: 12, flex: 1}}>
          <SelectCard
            onSelect={() => onSelect(4)}
            text={textJson.SignUp.Salary.Option['4']}
            active={selected === 4}
          />
        </View>
      </View>
      <View style={{marginTop: 12, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <SelectCard
            onSelect={() => onSelect(5)}
            text={textJson.SignUp.Salary.Option['5']}
            active={selected === 5}
          />
        </View>
        <View style={{marginLeft: 12, flex: 1}}>
          <SelectCard
            onSelect={() => onSelect(6)}
            text={textJson.SignUp.Salary.Option['6']}
            active={selected === 6}
          />
        </View>
      </View>
      <View style={{marginTop: 12, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <SelectCard
            onSelect={() => onSelect(7)}
            text={textJson.SignUp.Salary.Option['7']}
            active={selected === 7}
          />
        </View>
        <View style={{marginLeft: 12, flex: 1}}>
          <SelectCard
            onSelect={() => onSelect(8)}
            text={textJson.SignUp.Salary.Option['8']}
            active={selected === 8}
          />
        </View>
      </View>
    </SignUpTemplate>
  );
};

export default EditSalaryView;
