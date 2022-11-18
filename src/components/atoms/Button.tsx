import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {useTheme} from '../hooks/useTheme';

interface IButtonProps {
  onPress?: () => void;
  title: string;
}

const Button = (props: IButtonProps) => {
  const {title, onPress} = props;
  const {colors} = useTheme();

  return (
    <TouchableHighlight
      onPress={onPress}
      style={{...styles.button, backgroundColor: colors.primary}}>
      <Text style={{color: colors.secondary, textAlign: 'center'}}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
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

export {Button};
