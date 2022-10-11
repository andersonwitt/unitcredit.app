import React from 'react';
import {Text, View} from 'react-native';
import {UserInfo} from '../molecules/UserInfo';

const HomeTemplate = () => {
  return (
    <View testID="home-template">
      <UserInfo />
    </View>
  );
};

export {HomeTemplate};
