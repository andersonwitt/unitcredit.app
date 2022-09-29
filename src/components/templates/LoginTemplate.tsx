import React from 'react';
import {View} from 'react-native';
import {LoginForm} from '../molecules/LoginForm';

const LoginTemplate = () => {
  return (
    <View testID="login-template">
      <LoginForm />
    </View>
  );
};

export {LoginTemplate};
