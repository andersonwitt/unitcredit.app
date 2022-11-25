import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {UserSessionContext} from '../../../App';
import {MainMenuOptions} from '../molecules/MainMenuOptions';
import {TransactionsTotal} from '../molecules/TransactionsTotal';
import {UserInfo} from '../molecules/UserInfo';
import {EnumUserType, useUserService} from '../services/UserService';

const HomeTemplate = () => {
  const {token} = useContext(UserSessionContext);
  const {getUser} = useUserService();
  const [balance, setBalance] = useState<number>(0);

  const loadUser = useCallback(async () => {
    const response = await getUser(token?.userId ?? '');

    if (response?.balance) {
      setBalance(response?.balance ?? 0);
    }
  }, [setBalance]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <View
      testID="home-template"
      style={{paddingHorizontal: 15, paddingVertical: 15}}>
      <UserInfo userName={token?.userName ?? ''} />
      <TransactionsTotal mt={20} total={balance} onClickRefresh={loadUser} />
      <MainMenuOptions type={EnumUserType.ADMIN} />
    </View>
  );
};

export {HomeTemplate};
