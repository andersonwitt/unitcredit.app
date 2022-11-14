import React from 'react';
import {View} from 'react-native';
import {Header} from '../molecules/Header';
import { UserForm } from '../molecules/UserForm';

const UsersRegisterTemplate = () => {
  return (
    <View>
      <Header title="Novo Usuário" />
      <UserForm />
    </View>
  );
};

export {UsersRegisterTemplate};
