import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PromptNavigationParams} from '../types';
import {PromptSelected, PromptList, PromptAnswer} from '../../screens';

const Stack = createNativeStackNavigator<PromptNavigationParams>();

const PromptNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Selected'}>
      <Stack.Screen
        name={'Selected'}
        component={PromptSelected}
        options={{headerShown: false}}
      />
      <Stack.Screen name={'List'} component={PromptList} />
      <Stack.Screen name={'Answer'} component={PromptAnswer} />
    </Stack.Navigator>
  );
};

export default PromptNavigation;
