import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/useTheme';

export type CardItemType = {
  title: string;
  value: string;
};

interface ITransferReportSummaryProps {
  data: CardItemType[];
}

const TransferReportSummary: React.FC<ITransferReportSummaryProps> = ({
  data,
}) => {
  const {colors} = useTheme();
  return (
    <View style={{marginTop: 15}}>
      {data.map((item, index) => (
        <View
          key={`report-summary-${index}`}
          style={{...styles.card, backgroundColor: colors.contrast}}>
          <Text>{item.title}</Text>
          <Text>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    height: 50,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export {TransferReportSummary};
