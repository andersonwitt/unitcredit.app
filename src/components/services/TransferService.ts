import {useContext} from 'react';
import {UserSessionContext} from '../../../App';

export type TransferPayloadType = {
  total?: number;
  totalAsString?: string;
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

  return {transferToUser};
};

export {useTransferService};
