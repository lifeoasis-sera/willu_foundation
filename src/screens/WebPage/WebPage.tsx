import React, {useLayoutEffect} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {ColorBundle} from '../../styles/color-bundle';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommonNavigationParams} from '../../navigations/types';

type Props = NativeStackScreenProps<CommonNavigationParams, 'WebPage'>;

const WebPage = ({route, navigation}: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        renderLoading={() => (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color={ColorBundle.primary} size={'large'} />
          </View>
        )}
        source={{uri: route.params.url}}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

export default WebPage;
