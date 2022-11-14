import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Header} from '../molecules/Header';
import {ListView} from '../molecules/ListView';
import {NavigationUsersListContext} from '../pages/UsersList';
import {User, useUserService} from '../services/UserService';

const UsersListTemplate = () => {
  const {navigation} = useContext(NavigationUsersListContext);
  const [users, setUsers] = useState<User[]>([]);
  const {getUsers} = useUserService();

  const loadUsers = useCallback(async () => {
    const response = await getUsers();
    setUsers(response);
  }, [setUsers]);

  const onPressNewUser = () => {
    navigation?.navigate('UsersRegister');
  };

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <View>
      <Header
        title="Usuários"
        actionButton={{
          title: 'Novo',
          onPress: onPressNewUser,
        }}
      />
      <ListView
        data={users.map(item => ({
          title: item.name,
          value: item.id,
        }))}
      />
    </View>
  );
};

export {UsersListTemplate};
