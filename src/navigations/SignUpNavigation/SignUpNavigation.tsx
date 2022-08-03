import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EditChildPlan,
  EditDrink,
  EditHeight,
  EditPolitics,
  EditReligion,
  EditSalary,
  EditSelfie,
  EditSmoke,
  Onboarding,
  SignUpAuthCode,
  SignUpAuthEmail,
  SignUpBirth,
  SignUpGender,
  SignUpJob,
  SignUpName,
  SignUpResidence,
  SlipDefaultProfile,
  SlipDetailProfile,
  WebPage,
} from '../../screens';
import {SignUpNavigationParams, NavigationTheme} from '../types';
import {NavigationContainer} from '@react-navigation/native';
import {ColorBundle} from '../../styles/color-bundle';
import {Platform} from 'react-native';
import {PromptNavigation} from '../index';

const Stack = createNativeStackNavigator<SignUpNavigationParams>();

const SignUpNavigation = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator
        initialRouteName={'Prompt'}
        screenOptions={{
          headerShadowVisible: false,
          animation: Platform.OS === 'ios' ? 'default' : 'none',
        }}>
        <Stack.Screen
          name={'WebPage'}
          component={WebPage}
          options={{
            headerBackVisible: true,
            headerTintColor: ColorBundle.textDefault,
          }}
        />
        <Stack.Screen
          name={'Prompt'}
          component={PromptNavigation}
          options={{headerShown: false}}
        />

        <Stack.Group>
          <Stack.Screen
            name={'Onboarding'}
            component={Onboarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'AuthEmail'}
            component={SignUpAuthEmail}
            options={{
              headerBackVisible: false,
              title: '',
            }}
          />
          <Stack.Screen
            name={'AuthCode'}
            component={SignUpAuthCode}
            options={{
              headerBackVisible: true,
              title: '',
              headerTintColor: ColorBundle.textDefault,
            }}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name={'SlipDefaultProfile'}
            component={SlipDefaultProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Name'}
            component={SignUpName}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Gender'}
            component={SignUpGender}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Birth'}
            component={SignUpBirth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Residence'}
            component={SignUpResidence}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Job'}
            component={SignUpJob}
            options={{headerShown: false}}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name={'SlipDetailProfile'}
            component={SlipDetailProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Height'}
            component={EditHeight}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Smoke'}
            component={EditSmoke}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Drink'}
            component={EditDrink}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ChildPlan'}
            component={EditChildPlan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Politics'}
            component={EditPolitics}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Religion'}
            component={EditReligion}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Salary'}
            component={EditSalary}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'Selfie'}
            component={EditSelfie}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpNavigation;
