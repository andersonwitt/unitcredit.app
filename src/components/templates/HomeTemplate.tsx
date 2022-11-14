import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {UserSessionContext} from '../../../App';
import {MainMenuOptions} from '../molecules/MainMenuOptions';
import {TransactionsTotal} from '../molecules/TransactionsTotal';
import {UserInfo} from '../molecules/UserInfo';
import {EnumUserType} from '../services/UserService';

const HomeTemplate = () => {
  const {token} = useContext(UserSessionContext);

  return (
    <View
      testID="home-template"
      style={{paddingHorizontal: 15, paddingVertical: 15}}>
      <UserInfo userName={token?.userName ?? ''} />
      <TransactionsTotal mt={20} total={1500} />
      <MainMenuOptions type={EnumUserType.ADMIN} />
    </View>
  );
};

export {HomeTemplate};
