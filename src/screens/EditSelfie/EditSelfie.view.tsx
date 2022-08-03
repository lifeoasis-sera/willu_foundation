import React from 'react';
import {IconButton, SignUpTemplate, Typography} from '../../components';
import {getTextJson} from '../../utils';
import {FlatList, ImageBackground, Pressable, View} from 'react-native';
import {ColorBundle} from '../../styles/color-bundle';
import {ImageProps} from './EditSelfie.container';

interface EditSelfieViewProps {
  data: {
    images: ImageProps[];
    submitDisable: boolean;
  };
  handle: {
    onSubmit: () => void;
    onSelectPhoto: (key: string) => void;
    onChannelTalk: () => void;
  };
}

const EditSelfieView = (props: EditSelfieViewProps) => {
  const {images, submitDisable} = props.data;
  const {onSubmit, onSelectPhoto, onChannelTalk} = props.handle;
  const textJson = getTextJson();

  const renderBox = ({item, index}: {item: ImageProps; index: number}) => {
    if (item.image) {
      return (
        <View
          style={{
            flex: 1,
            aspectRatio: 1,
            backgroundColor: ColorBundle.backGround,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: index % 3 !== 0 ? 12 : 0,
            overflow: 'hidden',
          }}>
          <ImageBackground
            source={{uri: item.image}}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      );
    }

    return (
      <Pressable
        onPress={() => onSelectPhoto(item.key)}
        key={item.key}
        style={{
          flex: 1,
          aspectRatio: 1,
          backgroundColor: ColorBundle.backGround,
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: index % 3 !== 0 ? 12 : 0,
        }}>
        <ImageBackground
          source={require('../../assets/image/icon/ic_plus_circle_24.png')}
          style={{width: 24, height: 24}}
        />
      </Pressable>
    );
  };

  return (
    <SignUpTemplate
      title={textJson.SignUp.Selfie.Title}
      subtitle={textJson.SignUp.Selfie.Subtitle}
      progressBar={{num: 6, total: 7}}>
      <View style={{paddingHorizontal: 24, flex: 1}}>
        <View>
          <FlatList
            data={images}
            renderItem={renderBox}
            numColumns={3}
            columnWrapperStyle={{marginTop: 12}}
          />
        </View>
        <Typography
          color={ColorBundle.textInfo}
          size={16}
          center={true}
          style={{marginTop: 24}}>
          {textJson.SignUp.Selfie.Drag}
        </Typography>
        <IconButton
          onPress={onSubmit}
          disable={submitDisable}
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
      </View>
      <Pressable
        onPress={onChannelTalk}
        pointerEvents={'box-only'}
        style={{
          width: '100%',
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: ColorBundle.disable,
          flexDirection: 'row',
          alignContent: 'center',
          paddingTop: 16,
          paddingBottom: 12,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            padding: 8,
            borderRadius: 12,
            backgroundColor: ColorBundle.divider,
          }}>
          <ImageBackground
            source={require('../../assets/image/icon/ic_camera_check.png')}
            style={{width: 32, height: 32}}
          />
        </View>
        <View style={{marginLeft: 16}}>
          <Typography size={14} lineHeight={1.6}>
            {textJson.SignUp.Selfie.HelpTitle}
          </Typography>
          <Typography size={14} lineHeight={1.6} underLine={true}>
            {textJson.SignUp.Selfie.HelpSubtitle}
          </Typography>
        </View>
      </Pressable>
    </SignUpTemplate>
  );
};

export default EditSelfieView;
