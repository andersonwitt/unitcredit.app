import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IUserInfoProps {
  userName: string;
}

const UserInfo: React.FC<IUserInfoProps> = ({userName}) => {
  const {colors} = useTheme();

  const getDateFormated = (date: Date) =>
    new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);

  return (
    <View style={styles.container}>
      <View style={{...styles.bottom, backgroundColor: colors.contrast}}>
        <Icon name="account-circle" size={48} color={colors.text} />
      </View>
      <View style={{marginLeft: 15}}>
        <Text style={{fontWeight: '600'}}>
          Olá {userName},
        </Text>
        <Text>{getDateFormated(new Date())}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottom: {
    width: 70,
    height: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {UserInfo};
