import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {createContext, PropsWithChildren} from 'react';
import {RootStackParamList} from '../../Routes';
import Container from '../templates/Container';
import {HomeTemplate} from '../templates/HomeTemplate';

type NavigationHomeType = {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export const NavigationHomeContext = createContext<NavigationHomeType>({});

const Home: React.FC<PropsWithChildren<NavigationHomeType>> = ({
  navigation,
}) => {
  return (
    <NavigationHomeContext.Provider
      value={{
        navigation,
      }}>
      <Container displayBottomNavigation>
        <HomeTemplate />
      </Container>
    </NavigationHomeContext.Provider>
  );
};

export default Home;
