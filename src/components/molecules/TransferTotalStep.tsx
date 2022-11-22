import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from '../atoms/Button';
import {TransferContext} from '../Providers/TransferProvider';

interface IStepProps {
  onBackPress: () => void;
  onConfirmPress: () => void;
}

export const currencyToStringFormatter = (value: string) =>
  value.replace(/[\D|^.]/gi, '');

export const currencyFormatter = (value: string) => {
  value = currencyToStringFormatter(value);

  if (!value || Number(value) <= 0) return '';

  value =
    value.length === 1
      ? value.substring(0, value.length - 2) +
        '.0' +
        value.substring(value.length - 2)
      : value.substring(0, value.length - 2) +
        '.' +
        value.substring(value.length - 2);

  const currency = Number(value.replace(/[^0-9.-]+/g, ''));
  const formatter = Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(currency).toString();
};

const TransferTotalStep = (props: IStepProps) => {
  const {onBackPress, onConfirmPress} = props;
  const {colors} = useTheme();
  const {payload, setPayload} = useContext(TransferContext);

  const handleChange = (text: string) => {
    setPayload?.({
      ...payload,
      totalAsString: currencyFormatter(text),
    });
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
        <View>
          <Text style={{fontSize: 24}}>Qual o valor da transferencia?</Text>
        </View>
        <View>
          <Text>Saldo disponível: R$ 0,00</Text>
        </View>
        <View style={styles.container}>
          <Text>Total</Text>
          <TextInput
            keyboardType="decimal-pad"
            style={styles.input}
            value={payload?.totalAsString}
            placeholder="R$ 0,00"
            onChangeText={handleChange}
          />
        </View>
      </View>
      <View>
        <Button title="Avançar" onPress={onConfirmPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    marginVertical: 15,
  },
  root: {
    margin: 15,
    flex: 1,
  },
});

export {TransferTotalStep};