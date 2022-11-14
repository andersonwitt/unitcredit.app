import {StyleSheet, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {useTheme} from '../hooks/useTheme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavigation = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={{...styles.bottom, backgroundColor: colors.primary}}>
        <TouchableHighlight>
          <Icon name="home-outline" size={40} color={colors.secondary} />
        </TouchableHighlight>
        <TouchableHighlight>
          <Icon name="wallet-outline" size={40} color={colors.secondary} />
        </TouchableHighlight>
        <TouchableHighlight>
          <Icon name="qrcode" size={40} color={colors.secondary} />
        </TouchableHighlight>
        <TouchableHighlight>
          <Icon name="cog-outline" size={40} color={colors.secondary} />
        </TouchableHighlight>
        <TouchableHighlight>
          <Icon name="account-circle-outline" size={40} color={colors.secondary} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    height: 60,
    borderRadius: 20,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 15,
  },
});

export {BottomNavigation};
