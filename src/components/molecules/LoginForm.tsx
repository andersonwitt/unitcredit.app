import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {NavigationContext} from '../pages/Login';

const LoginForm: React.FC = () => {
  const {navigation} = useContext(NavigationContext);

  const onPressLogin = () => navigation?.navigate('Home');

  return (
    <View testID="login-form">
      <Button title="Login" onPress={onPressLogin} />
    </View>
  );
};

export {LoginForm};
