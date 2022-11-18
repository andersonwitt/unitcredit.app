import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../atoms/Button';
import { NavigationUsersRegisterContext } from '../pages/UsersRegister';
import {EnumUserType, User, useUserService} from '../services/UserService';

const UserForm = () => {
  const {navigation} = useContext(NavigationUsersRegisterContext);
  const [user, setUser] = useState<User>({
    type: EnumUserType.TEACHER,
  });
  const {createUser} = useUserService();

  const handleSaveClicked = async () => {
    console.log(user);
    const response = await createUser(user);

    if (response) {
      navigation?.goBack()
    }
  };

  const onChangeText = (field: string) => (value: string) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText('name')}
          value={user?.name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText('email')}
          value={user?.email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Matricula</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText('studentId')}
          value={user?.studentId}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText('password')}
          secureTextEntry
          value={user?.password}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Tipo</Text>
        <TextInput style={styles.input} value="Professor" placeholder="tipo" />
      </View>
      <View style={{...styles.inputContainer, marginTop: 40}}>
        <Button title="Salvar" onPress={handleSaveClicked} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
});

export {UserForm};
