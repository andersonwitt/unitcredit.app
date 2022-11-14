import React, {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BottomNavigation} from '../atoms/BottomNavigation';

interface IContainerProps {
  displayBottomNavigation?: boolean;
}

const Container: React.FC<PropsWithChildren<IContainerProps>> = ({
  children,
  displayBottomNavigation,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

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
      {children}
      {displayBottomNavigation && <BottomNavigation />}
    </SafeAreaView>
  );
};

export default Container;
