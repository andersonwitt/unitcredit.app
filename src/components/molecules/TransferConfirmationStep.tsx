import React, {useContext, useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Button} from '../atoms/Button';
import {useTheme} from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TransferContext} from '../Providers/TransferProvider';

interface IStepProps {
  onBackPress: () => void;
  onConfirmPress: () => Promise<void>;
}

const TransferConfirmationStep = (props: IStepProps) => {
  const {onBackPress, onConfirmPress} = props;
  const {to, payload} = useContext(TransferContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {colors} = useTheme();

  const handleConfirm = async () => {
    try {
      setIsLoading(true);
      await onConfirmPress?.();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <TouchableHighlight
          underlayColor={colors.contrast}
          style={{width: 36, borderRadius: 20}}
          onPress={onBackPress}>
          <Icon name="arrow-back" size={36} color={colors.text} />
        </TouchableHighlight>
      </View>
      <View>
        <Text style={{fontSize: 18}}>Transferindo</Text>
        <Text style={{fontSize: 24}}>{payload?.totalAsString}</Text>
        <Text style={{fontSize: 18}}>para {to?.name}</Text>
      </View>
      <View>
        <Button
          title="Confirmar"
          onPress={handleConfirm}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

export {TransferConfirmationStep};
