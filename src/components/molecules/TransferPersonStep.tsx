import React, {createRef, useContext, useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  View,
} from 'react-native';
import {Button} from '../atoms/Button';
import {useTheme} from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TransferContext} from '../Providers/TransferProvider';
import {User} from '../services/UserService';

interface IStepProps {
  onBackPress: () => void;
  onConfirmPress: () => void;
}

const TransferPersonStep = (props: IStepProps) => {
  const {colors} = useTheme();
  const {onBackPress, onConfirmPress} = props;
  const {users, setTo, to, payload} = useContext(TransferContext);
  const [usersFiltered, setUsersFiltered] = useState<User[]>([]);

  useEffect(() => {
    setUsersFiltered(users ?? []);
  }, [users, setUsersFiltered]);

  const handleInputChanged = (text: string) => {
    const newUsers = users?.filter(user =>
      user.name?.toLowerCase().includes(text.toLowerCase()),
    );
    setUsersFiltered(newUsers ?? []);
  };

  const handleUserSelected = (user: User) => {
    setTo?.(user);
  };

  const handleConfirm = () => {
    if (!to?.id) {
      ToastAndroid.show(
        'Selecione um usuário para continuar!',
        ToastAndroid.SHORT,
      );
      return;
    }
    onConfirmPress?.();
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
          <Text>Para quem você quer transferir {payload?.totalAsString}?</Text>
        </View>
        <View>
          <Text>Encontre um favorecido na lista.</Text>
        </View>
        <View style={styles.container}>
          <Text>Favorecido</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do favorecido"
            onChangeText={handleInputChanged}
          />
        </View>
        <View style={{maxHeight: 400}}>
          <ScrollView>
            {usersFiltered?.map((user, index) => (
              <Text
                style={{
                  backgroundColor:
                    to?.id == user.id ? colors.contrast : colors.background,
                  padding: 15,
                }}
                onPress={() => handleUserSelected(user)}
                key={index}>
                {user.name}
              </Text>
            ))}
          </ScrollView>
        </View>
      </View>
      <View>
        <Button title="Avançar" onPress={handleConfirm} />
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

export {TransferPersonStep};
