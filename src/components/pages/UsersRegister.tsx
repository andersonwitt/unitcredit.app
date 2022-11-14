import React from 'react';
import Container from '../templates/Container';
import {UsersRegisterTemplate} from '../templates/UsersRegisterTemplate';

const UsersRegister = () => {
  return (
    <Container displayBottomNavigation>
      <UsersRegisterTemplate />
    </Container>
  );
};

export {UsersRegister};
