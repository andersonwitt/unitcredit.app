import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {createContext, PropsWithChildren} from 'react';
import {RootStackParamList} from '../../Routes';
import Container from '../templates/Container';
import {UsersRegisterTemplate} from '../templates/UsersRegisterTemplate';

type NavigationUsersRegisterPageType = {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'UsersRegister'>;
};

export const NavigationUsersRegisterContext =
  createContext<NavigationUsersRegisterPageType>({});

const UsersRegister: React.FC<
  PropsWithChildren<NavigationUsersRegisterPageType>
> = ({navigation}) => {
  return (
    <NavigationUsersRegisterContext.Provider
      value={{
        navigation,
      }}>

    <Container displayBottomNavigation>
      <UsersRegisterTemplate />
    </Container>
      </NavigationUsersRegisterContext.Provider>
  );
};

export {UsersRegister};
