import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {TransferPayloadType} from '../services/TransferService';
import {User, useUserService} from '../services/UserService';

type TransferContextType = {
  payload?: TransferPayloadType;
  setPayload?: (payload: TransferPayloadType) => void;
  users?: User[];
  setUsers?: (users: User[]) => void;
  to?: User;
  setTo?: (user: User) => void;
};

export const TransferContext = createContext<TransferContextType>({});

const TransferProvider: React.FC<PropsWithChildren> = ({children}) => {
  const {getUsers} = useUserService();
  const [users, setUsers] = useState<User[]>([]);
  const [to, setTo] = useState<User>({});
  const [payload, setPayload] = useState<TransferPayloadType>({
    toId: '',
    total: 0,
    totalAsString: '',
  });

  const loadUsers = useCallback(async () => {
    const response = await getUsers();
    setUsers(response);
  }, [setUsers]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <TransferContext.Provider
      value={{payload, setPayload, users, setUsers, setTo, to}}>
      {children}
    </TransferContext.Provider>
  );
};

export {TransferProvider};
