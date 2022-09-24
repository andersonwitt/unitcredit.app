import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import Login from './components/pages/Login';
import Home from './components/pages/Home';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Home: {userId: string};
};

export type NavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const MainNavigation: React.FC = () => {
  const {Navigator, Screen} = Stack;
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
