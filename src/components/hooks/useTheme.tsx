import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export type ThemeColors = {
  background: string;
  primary: string;
  secondary: string;
  contrast: string;
  text: string;
  icon: string;
  card: string;
};

const useTheme = () => {
  const theme = useColorScheme();
  const [colors, setColors] = useState<ThemeColors>({
    primary: '#c62828',
    secondary: '#fff',
    background: theme === 'dark' ? Colors.darker : Colors.lighter,
    contrast: '#d1d1d1',
    icon: '#666666',
    text: theme === 'dark' ? '#fff' : '#666666',
    card: '#EBEBEB',
  });

  useEffect(() => {
    setColors({
      primary: '#c62828',
      secondary: '#fff',
      background: theme === 'dark' ? Colors.darker : Colors.lighter,
      contrast: '#d1d1d1',
      icon: '#d1d1d1',
      text: theme === 'dark' ? '#fff' : '#666666',
      card: '#EBEBEB',
    });
  }, [theme, setColors]);

  return {colors};
};

export {useTheme};
