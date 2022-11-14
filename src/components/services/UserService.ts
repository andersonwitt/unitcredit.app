import {useContext} from 'react';
import {UserSessionContext} from '../../../App';

export enum EnumUserType {
  ADMIN = 'ADMIN',
  COMMERCE = 'COMMERCE',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
}

export type BaseType = {
  id: string;
  createAt: Date;
  updateAt: Date;
};

export type SignInRequest = {
  userName: string;
  password: string;
  type?: EnumUserType;
};

export type User = BaseType & {
  name: string;
  email: string;
  studentId: string;
  password: string;
  balance: number;
  type?: EnumUserType;
};

export type SignInResult = {
  isAuthenticated: boolean;
  accessToken: string;
  userName: string;
};

const useUserService = () => {
  const {token} = useContext(UserSessionContext);

  const signIn = async ({
    password,
    userName,
  }: SignInRequest): Promise<SignInResult> =>
    fetch('https://unitcreditapi.herokuapp.com/api/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        studentId: userName,
        password,
      }),
    }).then(response => response.json());

  const createUser = async (payload: User): Promise<User> =>
    fetch('https://unitcreditapi.herokuapp.com/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token?.accessToken,
      },
      body: JSON.stringify({
        payload,
      }),
    }).then(response => response.json());

  const updateUser = async (payload: User): Promise<User> =>
    fetch('https://unitcreditapi.herokuapp.com/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token?.accessToken,
      },
      body: JSON.stringify({
        payload,
      }),
    }).then(response => response.json());

  const removeUser = async (id: string): Promise<boolean> => {
    return fetch(`https://unitcreditapi.herokuapp.com/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token?.accessToken,
      },
    }).then(response => response.json());
  };

  const getUsers = async (): Promise<User[]> => {
    return fetch(`https://unitcreditapi.herokuapp.com/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token?.accessToken,
      },
    }).then(response => response.json());
  };

  return {signIn, createUser, updateUser, removeUser, getUsers};
};

export {useUserService};
