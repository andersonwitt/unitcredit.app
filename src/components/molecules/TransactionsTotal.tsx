import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ITransactionsTotalProps {
  mt?: number;
  total: number;
  onClickRefresh: () => Promise<void>;
}

const TransactionsTotal: React.FC<ITransactionsTotalProps> = ({
  mt = 15,
  total = 0,
  onClickRefresh,
}) => {
  const {colors} = useTheme();

  const getNumberFormated = (value: number) =>
    Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(
      value,
    );

  return (
    <View
      style={{...styles.root, backgroundColor: colors.contrast, marginTop: mt}}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{fontSize: 18}}>| Saldo |</Text>
        <TouchableHighlight
          underlayColor={colors.contrast}
          style={{width: 24, borderRadius: 20, marginLeft: 15}}
          onPress={onClickRefresh}>
          <Icon name="refresh" size={24} color={colors.text} />
        </TouchableHighlight>
      </View>
      <View>
        <Text style={{fontSize: 24}}>{getNumberFormated(total)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 80,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
});

export {TransactionsTotal};
