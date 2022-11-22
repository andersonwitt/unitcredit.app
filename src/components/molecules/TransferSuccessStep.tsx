import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../atoms/Button';

interface IStepProps {
  onConfirmPress: () => void;
}

const TransferSuccessStep = (props: IStepProps) => {
  const {onConfirmPress} = props;
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
      }}>
      <View></View>
      <View
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Text style={{textAlign: 'center', fontSize: 24}}>Transferência efetuada com sucesso!</Text>
      </View>
      <View>
        <Button title="Entendi" onPress={onConfirmPress} />
      </View>
    </View>
  );
};

export {TransferSuccessStep};
