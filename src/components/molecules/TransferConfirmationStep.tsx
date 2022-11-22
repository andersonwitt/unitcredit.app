import React, {useContext} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Button} from '../atoms/Button';
import {useTheme} from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TransferContext} from '../Providers/TransferProvider';

interface IStepProps {
  onBackPress: () => void;
  onConfirmPress: () => void;
}

const TransferConfirmationStep = (props: IStepProps) => {
  const {onBackPress, onConfirmPress} = props;
  const {to, payload} = useContext(TransferContext);

  const {colors} = useTheme();
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
        <Button title="Confirmar" onPress={onConfirmPress} />
      </View>
    </View>
  );
};

export {TransferConfirmationStep};
