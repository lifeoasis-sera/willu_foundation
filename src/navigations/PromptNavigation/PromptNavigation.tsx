import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../types';
import {PromptSelected, PromptList, SlipDetailProfile} from '../../screens';

const Stack = createNativeStackNavigator<PromptNavigationParams>();

const PromptNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Selected'}>
      <Stack.Screen
        name={'Selected'}
        component={PromptSelected}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'List'}
        component={PromptList}
        options={{
          headerShadowVisible: false,
          title: '질문',
          headerBackTitle: '',
          headerBackImageSource: require('../../assets/image/icon/ic_xmark_circle_24.png'),
        }}
      />
      <Stack.Screen name={'Answer'} component={SlipDetailProfile} />
    </Stack.Navigator>
  );
};

export default PromptNavigation;
