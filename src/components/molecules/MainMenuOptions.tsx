import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '../hooks/useTheme';
import {NavigationHomeContext} from '../pages/Home';
import {EnumUserType} from '../services/UserService';

interface IMainMenuOptionsProps {
  type: EnumUserType;
}
const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 15,
  },
});

const MainMenuOptions: React.FC<IMainMenuOptionsProps> = ({type}) => {
  const {colors} = useTheme();
  const {navigation} = useContext(NavigationHomeContext);

  return (
    <View style={{marginTop: 15}}>
      <View>
        <View style={{...styles.card, backgroundColor: colors.contrast}}>
          <Icon name="store-outline" size={36} color={colors.primary} />
          <Text
            style={{marginLeft: 20}}
            onPress={() => {
              navigation?.navigate('TransferReport');
            }}>
            Transações
          </Text>
        </View>
        {type === EnumUserType.ADMIN && (
          <TouchableHighlight
            style={{...styles.card, backgroundColor: colors.contrast}}
            underlayColor={colors.contrast}
            onPress={() => {
              navigation?.navigate('UsersList');
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="account-circle" size={36} color={colors.primary} />
              <Text style={{marginLeft: 20}}>Cadastro de usuário</Text>
            </View>
          </TouchableHighlight>
        )}
        <TouchableHighlight
          style={{...styles.card, backgroundColor: colors.contrast}}
          underlayColor={colors.contrast}
          onPress={() => {
            navigation?.navigate('Transfer');
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="hand-coin-outline" size={36} color={colors.primary} />
            <Text style={{marginLeft: 20}}>Transferência de créditos</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export {MainMenuOptions};
