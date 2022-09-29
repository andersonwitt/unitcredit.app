import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {createContext, PropsWithChildren} from 'react';
import {NavigationProps, RootStackParamList} from '../../Routes';
import Container from '../templates/Container';
import {LoginTemplate} from '../templates/LoginTemplate';

type NavigationLoginType = {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export const NavigationContext = createContext<NavigationLoginType>({});

const Login: React.FC<PropsWithChildren<NavigationLoginType>> = ({
  navigation,
}) => {
  return (
    <NavigationContext.Provider
      value={{
        navigation,
      }}>
      <Container>
        <LoginTemplate />
      </Container>
    </NavigationContext.Provider>
  );
};

export default Login;
