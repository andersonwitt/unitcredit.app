import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {LoginNavigationContext} from '../pages/Login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../hooks/useTheme';
import {useUserService} from '../services/UserService';
import {UserSessionContext} from '../../../App';

type User = {
  userName: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {navigation} = useContext(LoginNavigationContext);
  const {setToken} = useContext(UserSessionContext);
  const {colors} = useTheme();
  const {signIn} = useUserService();
  const [user, setUser] = useState<User>({
    password: '',
    userName: '',
  });

  const onPressLogin = async () => {
    try {
      const response = await signIn({
        userName: user.userName,
        password: user.password,
      });
      if (response.isAuthenticated && response.accessToken) {
        setToken?.(response);
        navigation?.replace('Home');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <View style={styles.container} testID="login-form">
      <View style={{height: '15%'}}>
        <Text>UnitCredit APP</Text>
      </View>
      <View style={{...styles.input, borderColor: colors.primary}}>
        <Icon name="account-circle" size={24} color={colors.icon} />
        <TextInput
          style={{height: 50}}
          placeholderTextColor={colors.text}
          placeholder="usuário"
          testID="username-input"
          onChangeText={text => onChange('userName', text)}
          value={user.userName}
        />
      </View>
      <View style={{...styles.input, borderColor: colors.primary}}>
        <Icon name="lock" size={24} color={colors.icon} />
        <TextInput
          secureTextEntry
          placeholderTextColor={colors.text}
          style={{height: 50}}
          placeholder="senha"
          testID="password-input"
          onChangeText={text => onChange('password', text)}
          value={user.password}
        />
      </View>
      <View style={{width: '100%'}}>
        <TouchableHighlight
          onPress={onPressLogin}
          style={{...styles.button, backgroundColor: colors.primary}}>
          <Text style={{color: colors.secondary, textAlign: 'center'}}>
            Entrar
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    width: '100%',
    marginBottom: 15,
    padding: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 15,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 40,
    width: '100%',
    padding: 10,
    borderRadius: 25,
    height: 40,
  },
});

export {LoginForm};
