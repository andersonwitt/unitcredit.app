import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {createContext, PropsWithChildren} from 'react';
import {RootStackParamList} from '../../Routes';
import Container from '../templates/Container';
import {UsersListTemplate} from '../templates/UsersListTemplate';

type NavigationUsersListPageType = {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'UsersList'>;
};

export const NavigationUsersListContext =
  createContext<NavigationUsersListPageType>({});

const UsersList: React.FC<PropsWithChildren<NavigationUsersListPageType>> = ({
  navigation,
}) => {
  return (
    <NavigationUsersListContext.Provider
      value={{
        navigation,
      }}>
      <Container displayBottomNavigation>
        <UsersListTemplate />
      </Container>
    </NavigationUsersListContext.Provider>
  );
};

export default UsersList;
