import {
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Button} from '../atoms/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useTheme} from '../hooks/useTheme';

const TotalStep = () => {
  const {colors} = useTheme();
  return (
    <View>
      <TouchableHighlight
      //onPress={onPress}
      >
        <Icon name="arrow-back" size={36} color={colors.text} />
      </TouchableHighlight>
      <View>
        <Text>Qual o valor da transferencia?</Text>
      </View>
      <View>
        <Text>Saldo disponível: R$ 0,00</Text>
      </View>
      <View>
        <TextInput />
      </View>
      <View>
        <Button title="Avançar" />
      </View>
    </View>
  );
};

const PersonStep = () => {
  const {colors} = useTheme();
  return (
    <View>
      <TouchableHighlight
      //onPress={onPress}
      >
        <Icon name="arrow-back" size={36} color={colors.text} />
      </TouchableHighlight>
      <View>
        <Text>Para quem você quer transferir R$ 0,00?</Text>
      </View>
      <View>
        <Text>Encontre um favorecido na lista.</Text>
      </View>
      <View>
        <TextInput />
      </View>
      <View style={{maxHeight: 400}}>
        <ScrollView>
          {'a'
            .repeat(100)
            .split('')
            .map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
        </ScrollView>
      </View>
      <View>
        <Button title="Avançar" />
      </View>
    </View>
  );
};

const ConfirmationStep = () => {
  const {colors} = useTheme();
  return (
    <View>
      <TouchableHighlight
      //onPress={onPress}
      >
        <Icon name="arrow-back" size={36} color={colors.text} />
      </TouchableHighlight>
      <View>
        <Text>Transferindo</Text>
        <Text>R$ 0,00</Text>
        <Text>para Anderson da Rosa Witt</Text>
      </View>
      <View>
        <Button title="Confirmar" />
      </View>
    </View>
  );
};

const SuccessStep = () => {
  return (
    <View>
      <View>
        <Text>Transferência efetuada com sucesso!</Text>
      </View>
      <View>
        <Button title="Entendi" />
      </View>
    </View>
  );
};

const TransferTemplate = () => {
  return (
    <View>
      {/* <Header title="Nova transferência" /> */}
      {/* <TotalStep /> */}
      {/* <PersonStep /> */}
      {/* <SuccessStep /> */}
      <ConfirmationStep />
    </View>
  );
};

export {TransferTemplate};
