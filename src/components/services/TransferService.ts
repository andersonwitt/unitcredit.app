import {useContext} from 'react';
import {UserSessionContext} from '../../../App';

export type TransferPayloadType = {
  total?: number;
  totalAsString?: string;
  toId?: string;
};

export enum EnumTransactionType {
  CREDIT = 1,
  SALEORPAYMENT = 2,
  TRANSFER = 3,
}

export type Transaction = {
  description?: string;
  total?: number;
  type?: EnumTransactionType;
  fromId?: string;
  toId?: string;
};

export type BaseResultType = {
  isValid: boolean;
  message: string;
};

const useTransferService = () => {
  const {token} = useContext(UserSessionContext);
  //const apiURL = 'https://unitcreditapi.herokuapp.com';
  const apiURL = 'http://10.0.0.120:5000';

  const transferToUser = (
    payload: TransferPayloadType,
  ): Promise<BaseResultType> => {
    return fetch(`${apiURL}/api/transfers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token?.accessToken,
      },
      body: JSON.stringify({...payload}),
    }).then(response => response.json());
  };

  const getTransactionsByUserId = async (userId: string): Promise<Transaction[]> => {
    return fetch(`${apiURL}/api/Transactions/User/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token?.accessToken,
      },
    }).then(response => response.json());
  };

  return {transferToUser, getTransactionsByUserId};
};

export {useTransferService};
