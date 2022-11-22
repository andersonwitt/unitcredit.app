import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {createContext, PropsWithChildren} from 'react';
import {RootStackParamList} from '../../Routes';
import { TransferProvider } from '../Providers/TransferProvider';
import Container from '../templates/Container';
import {TransferTemplate} from '../templates/TransferTemplate';

type NavigationTransferType = {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Transfer'>;
};

export const TransferNavigationContext = createContext<NavigationTransferType>(
  {},
);

const Transfer: React.FC<PropsWithChildren<NavigationTransferType>> = ({
  navigation,
}) => {
  return (
    <TransferNavigationContext.Provider value={{navigation}}>
      <TransferProvider>
        <Container>
          <TransferTemplate />
        </Container>
      </TransferProvider>
    </TransferNavigationContext.Provider>
  );
};

export {Transfer};
