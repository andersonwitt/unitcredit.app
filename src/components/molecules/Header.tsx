import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useTheme} from '../hooks/useTheme';

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 10,
    borderRadius: 25,
    height: 40,
  },
  container: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

interface IActionButtonProps {
  title: string;
  onPress?: () => void;
}

interface IHeaderProps {
  title: string;
  actionButton?: IActionButtonProps;
}

const Header = ({title, actionButton}: IHeaderProps) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {actionButton && (
        <TouchableHighlight
          onPress={actionButton?.onPress}
          style={{...styles.button, backgroundColor: colors.primary}}>
          <Text style={{color: colors.secondary, textAlign: 'center'}}>
            {actionButton.title}
          </Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

export {Header};
