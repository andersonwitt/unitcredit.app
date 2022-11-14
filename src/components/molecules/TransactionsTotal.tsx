import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/useTheme';

interface ITransactionsTotalProps {
  mt?: number;
  total: number;
}

const TransactionsTotal: React.FC<ITransactionsTotalProps> = ({
  mt = 15,
  total = 0,
}) => {
  const {colors} = useTheme();

  const getNumberFormated = (value: number) =>
    Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(
      value,
    );

  return (
    <View
      style={{...styles.root, backgroundColor: colors.contrast, marginTop: mt}}>
      <View>
        <Text style={{fontSize: 18}}>| Transações |</Text>
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
