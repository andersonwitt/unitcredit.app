import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import Login from './components/pages/Login';
import Home from './components/pages/Home';
import UsersList from './components/pages/UsersList';
import {UsersRegister} from './components/pages/UsersRegister';
import { Transfer } from './components/pages/Transfer';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  UsersList: undefined;
  UsersRegister: undefined;
  Transfer: undefined;
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
        <Screen name="UsersList" component={UsersList} />
        <Screen name="UsersRegister" component={UsersRegister} />
        <Screen name="Transfer" component={Transfer} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
