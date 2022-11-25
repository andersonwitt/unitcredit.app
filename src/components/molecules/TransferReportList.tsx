import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {CardItemType, TransferReportSummary} from './TransferReportSummary';

interface ITransferReportListProps {
  data: CardItemType[];
}

const TransferReportList: React.FC<ITransferReportListProps> = ({data}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.root}>
      <ScrollView style={{...styles.card, backgroundColor: colors.card}}>
        <TransferReportSummary
          data={data}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  card: {
    display: 'flex',
    height: '65%',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
});

export {TransferReportList};
