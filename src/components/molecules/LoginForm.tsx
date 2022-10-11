import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {NavigationContext} from '../pages/Login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type User = {
  userName: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {navigation} = useContext(NavigationContext);
  const [user, setUser] = useState<User>({
    password: '',
    userName: '',
  });

  const onPressLogin = () => {};

  const onChange = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <View style={styles.container} testID="login-form">
      <View style={styles.input}>
        <Icon name="account-circle" size={24} color="#666666" />
        <TextInput
          style={{height: 50}}
          placeholder="usuário"
          testID="username-input"
          onChangeText={text => onChange('userName', text)}
          value={user.userName}
        />
      </View>
      <View style={styles.input}>
        <Icon name="lock" size={24} color="#666666" />
        <TextInput
          secureTextEntry
          style={{height: 50}}
          placeholder="senha"
          testID="password-input"
          onChangeText={text => onChange('password', text)}
          value={user.password}
        />
      </View>
      <View style={{width: '100%'}}>
        <TouchableHighlight style={styles.button}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Entrar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    width: '100%',
    marginBottom: 15,
    padding: 10,
    borderRadius: 25,
    borderColor: '#c62828',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 15,
    
  },
  button: {
    width: '100%',
    backgroundColor: '#c62828',
    padding: 10,
    borderRadius: 25,
    height: 40,
  },
});

export {LoginForm};
