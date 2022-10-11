import React from 'react';
import {Button, View} from 'react-native';
import Container from '../templates/Container';
import {HomeTemplate} from '../templates/HomeTemplate';

const Home = () => {
  return (
    <Container displayBottomNavigation>
      <HomeTemplate />
    </Container>
  );
};

export default Home;
