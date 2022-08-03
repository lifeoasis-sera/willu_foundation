import React from 'react';
import {BottomSheet} from '../index';
import {Typography} from '../../Texts';
import LinearGradient from 'react-native-linear-gradient';
import {ColorBundle} from '../../../styles/color-bundle';
import {FlatButton} from '../../Buttons';
import {View} from 'react-native';

interface TestBottomSheetProps {
  visible: boolean;
  onClose?: () => void;
}

const TestBottomSheet = (props: TestBottomSheetProps) => {
  const {visible, onClose} = props;

  return (
    <BottomSheet visible={visible} showIndicator={false} onClose={onClose}>
      <LinearGradient
        colors={['rgba(255, 251, 217, 0)', '#FFFBD9', '#ECD1E0']}
        locations={[1, 0.4, 0]}>
        <View style={{paddingHorizontal: 24}}>
          <Typography
            bold={'700'}
            size={28}
            lineHeight={1.5}
            style={{marginTop: 52}}>
            {
              '한 사람에게 집중해 보세요.\nwillu가 하루에 두 번\n새 인연을 소개해 드릴게요.'
            }
          </Typography>
          <Typography
            lineHeight={1.6}
            color={ColorBundle.textThird}
            style={{marginTop: 8}}>
            {'내용을 적는다.\n시간을 알려준다.'}
          </Typography>
        </View>
      </LinearGradient>

      <View style={{paddingHorizontal: 20, marginTop: 111, marginBottom: 24}}>
        <FlatButton display={'stretch'}>{'시작하기'}</FlatButton>
      </View>
    </BottomSheet>
  );
};

export default TestBottomSheet;
