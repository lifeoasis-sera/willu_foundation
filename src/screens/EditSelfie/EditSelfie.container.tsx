import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditSelfieView from './EditSelfie.view';
import {service} from '../../business';

export interface ImageProps {
  key: string;
  image?: string;
}

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Selfie'>;
const EditReligionContainer = ({navigation}: Props) => {
  const [data, setData] = useState<ImageProps[]>([
    {key: '0'},
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'},
  ]);

  function submitSelfie() {
    // TODO API : 사진 정보 저장
    navigation.navigate('Prompt');
  }

  async function getPhoto(key: string) {
    const image = await service.gallery.getSelfie();
    setData(prev => {
      return prev.map(ele => {
        if (ele.key === key) {
          return {...ele, image: image};
        }
        return ele;
      });
    });
  }

  function goChannelTalk() {
    navigation.navigate('WebPage', {
      url: 'https://o1jwp.channel.io/support-bots/44185',
    });
  }

  return (
    <EditSelfieView
      data={{
        images: data,
        submitDisable:
          data.reduce((prev, cur) => (cur.image ? (prev += 1) : prev), 0) < 2,
      }}
      handle={{
        onSubmit: submitSelfie,
        onSelectPhoto: getPhoto,
        onChannelTalk: goChannelTalk,
      }}
    />
  );
};

export default EditReligionContainer;
