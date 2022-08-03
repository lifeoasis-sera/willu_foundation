import {DefaultTheme} from '@react-navigation/native';
import {ColorBundle} from '../styles/color-bundle';

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: ColorBundle.primary,
    background: 'white',
  },
};

export type CommonNavigationParams = {
  WebPage: {url: string; title?: string; params?: {[key: string]: string}};
};

export type SignInNavigationParams = CommonNavigationParams & {
  Onboarding: undefined;
  AuthEmail: undefined;
  AuthCode: {email: string};
};

export type SignUpNavigationParams = CommonNavigationParams &
  SignInNavigationParams & {
    SlipDefaultProfile: undefined;
    Name: undefined;
    Gender: undefined;
    Birth: undefined;
    Residence: undefined;
    Job: undefined;
    SlipDetailProfile: undefined;
    Height: undefined;
    Smoke: undefined;
    Drink: undefined;
    ChildPlan: undefined;
    Politics: undefined;
    Religion: undefined;
    Salary: undefined;
    Selfie: undefined;
    Prompt: undefined;
  };

export type PromptNavigationParams = {
  Selected: undefined;
  List: undefined;
  Answer: {question: string};
};
