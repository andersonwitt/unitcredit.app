import React, {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BottomNavigation} from '../atoms/BottomNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../hooks/useTheme';

interface IBackButtonProps {
  onPress?: () => void;
}
interface IContainerProps {
  displayBottomNavigation?: boolean;
  backButton?: IBackButtonProps;
  title?: string;
}

const Container: React.FC<PropsWithChildren<IContainerProps>> = ({
  children,
  displayBottomNavigation,
  backButton,
  title,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {colors} = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView testID="main-container" style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {(backButton?.onPress || title) && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15
          }}>
          {backButton?.onPress && (
            <TouchableHighlight
              underlayColor={colors.contrast}
              style={{width: 36, borderRadius: 20, marginLeft: 15}}
              onPress={backButton.onPress}>
              <Icon name="arrow-back" size={36} color={colors.text} />
            </TouchableHighlight>
          )}
          {title && (
            <Text style={{marginLeft: backButton?.onPress ? 15 : 0}}>
              {title}
            </Text>
          )}
        </View>
      )}
      {children}
      {displayBottomNavigation && <BottomNavigation />}
    </SafeAreaView>
  );
};

export default Container;
