import React from 'react';
import {Icon, IconButton, SignUpTemplate, Typography} from '../../components';
import {getTextJson} from '../../utils';
import {FlatList, ImageBackground, Pressable, View} from 'react-native';
import {ColorBundle} from '../../styles/color-bundle';
import {ImageProps} from './EditSelfie.container';

interface EditSelfieViewProps {
  data: {
    images: ImageProps[];
  };
  handle: {
    onSubmit?: () => void;
    onSelectPhoto: (key: string) => void;
    onChannelTalk: () => void;
  };
}

const EditSelfieView = (props: EditSelfieViewProps) => {
  const {images} = props.data;
  const {onSubmit, onSelectPhoto, onChannelTalk} = props.handle;
  const textJson = getTextJson();

  const renderBox = ({item, index}: {item: ImageProps; index: number}) => {
    if (item.image) {
      return (
        <Pressable
          onPress={() => onSelectPhoto(item.key)}
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
        </Pressable>
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
        <Icon
          icon={require('../../assets/image/icon/ic_plus_circle_24.png')}
          size={24}
        />
      </Pressable>
    );
  };

  return (
    <SignUpTemplate
      title={textJson.SignUp.Selfie.Title}
      subtitle={textJson.SignUp.Selfie.Subtitle}
      progressBar={{num: 8, total: 9}}>
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
          style={{marginTop: 20}}>
          {textJson.SignUp.Selfie.Drag}
        </Typography>
      </View>
      <View style={{margin: 16}}>
        <IconButton
          onPress={onSubmit}
          disable={!onSubmit}
          icon={require('../../assets/image/icon/ic_arrow_right.png')}
          size={24}
          radius={60}
          style={{margin: 16}}
          containerStyle={{alignSelf: 'flex-end'}}
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
          <Icon
            icon={require('../../assets/image/icon/ic_camera_check.png')}
            size={32}
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
