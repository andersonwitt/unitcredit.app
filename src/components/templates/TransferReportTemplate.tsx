import React, {useCallback, useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {UserSessionContext} from '../../../App';
import {TransferReportList} from '../molecules/TransferReportList';
import {TransferReportSummary} from '../molecules/TransferReportSummary';
import {
  EnumTransactionType,
  Transaction,
  useTransferService,
} from '../services/TransferService';

const TransferReportTemplate = () => {
  const {token} = useContext(UserSessionContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const {getTransactionsByUserId} = useTransferService();

  const loadTransactions = useCallback(async () => {
    const response = await getTransactionsByUserId(token?.userId ?? '');

    if (response?.length) {
      setTransactions(response);
    }
  }, [setTransactions]);

  const getTotals = () => {
    const creditTotal = transactions
      .filter(t => t.toId === token?.userId)
      .reduce((acum, current) => (acum += current.total ?? 0), 0);

    const debitTotal = transactions
      .filter(t => t.fromId === token?.userId)
      .reduce((acum, current) => (acum += current.total ?? 0), 0);

    const averageTotal = creditTotal - debitTotal;

    return {averageTotal, creditTotal, debitTotal};
  };

  const getType = (type?: EnumTransactionType) => {
    if (type === EnumTransactionType.CREDIT) return 'Credito';
    if (type === EnumTransactionType.TRANSFER) return 'Débito';
    if (type === EnumTransactionType.SALEORPAYMENT) return 'Venda';

    return '';
  };

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  const formatValue = (value: number) =>
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  return (
    <View style={styles.root}>
      <TransferReportSummary
        data={[
          {title: 'Creditado', value: formatValue(getTotals().creditTotal)},
          {title: 'Debitado', value: formatValue(getTotals().debitTotal)},
          {title: 'Resultado', value: formatValue(getTotals().averageTotal)},
        ]}
      />
      <TransferReportList
        data={transactions.map(item => ({
          title: getType(item.type),
          value: formatValue(item.total ?? 0),
        }))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
});

export {TransferReportTemplate};
