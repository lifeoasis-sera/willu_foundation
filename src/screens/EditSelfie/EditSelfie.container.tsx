import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SignUpNavigationParams} from '../../navigations/types';
import EditSelfieView from './EditSelfie.view';
import {service} from '../../business';
import {GALLERY_EXCEPTION} from '../../business/service/GalleryService';
import {Alert, Linking} from 'react-native';
import {getTextJson} from '../../utils';

export interface ImageProps {
  key: string;
  image?: string;
}

type Props = NativeStackScreenProps<SignUpNavigationParams, 'Selfie'>;
const EditReligionContainer = ({navigation}: Props) => {
  const textJson = getTextJson();
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
    try {
      const image = await service.gallery.getSelfie();
      setData(prev => {
        return prev.map(ele => {
          if (ele.key === key) {
            return {...ele, image: image};
          }
          return ele;
        });
      });
    } catch (e) {
      if (e === GALLERY_EXCEPTION.BLOCKED) {
        Alert.alert(
          textJson.SignUp.Selfie.Alert.Title,
          textJson.SignUp.Selfie.Alert.Subtitle,
          [
            {
              text: textJson.SignUp.Selfie.Alert.Setting,
              onPress: () => {
                Linking.openSettings().catch(() =>
                  Alert.alert(textJson.SignUp.Selfie.Alert.Error),
                );
              },
            },
            {text: textJson.Enum.Alert.Confirm, onPress: () => {}},
          ],
        );
      }
    }
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
      }}
      handle={{
        onSubmit:
          data.reduce((prev, cur) => (cur.image ? (prev += 1) : prev), 0) >= 2
            ? submitSelfie
            : undefined,
        onSelectPhoto: getPhoto,
        onChannelTalk: goChannelTalk,
      }}
    />
  );
};

export default EditReligionContainer;
