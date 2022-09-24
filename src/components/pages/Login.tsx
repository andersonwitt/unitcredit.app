import React from 'react';
import {Button, View} from 'react-native';
import {NavigationProps} from '../../Routes';
import Container from '../templates/Container';

const Login = ({navigation}: NavigationProps<'Login'>) => {
  const onClick = () => navigation.navigate('Home');

  return (
    <Container>
      <View>
        <Button title="Login" onPress={onClick} />
      </View>
    </Container>
  );
};

export default Login;
