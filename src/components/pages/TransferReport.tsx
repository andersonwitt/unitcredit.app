import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {RootStackParamList} from '../../Routes';
import Container from '../templates/Container';
import {TransferReportTemplate} from '../templates/TransferReportTemplate';

type NavigationTransferReportType = {
  navigation?: NativeStackNavigationProp<RootStackParamList, 'TransferReport'>;
};

const TransferReport: React.FC<
  PropsWithChildren<NavigationTransferReportType>
> = ({navigation}) => {
  const handleBackPressed = () => {
    navigation?.goBack();
  };

  return (
    <Container
      title="Transações"
      backButton={{
        onPress: handleBackPressed,
      }}>
      <TransferReportTemplate />
    </Container>
  );
};

export {TransferReport};
