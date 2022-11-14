import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useTheme} from '../hooks/useTheme';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    //borderRadius: 25,
    height: 40,
    marginTop: 15,
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

type ListViewItemType = {
  title: string;
  value: string;
};

interface IListViewProps {
  data: ListViewItemType[];
}

const ListView = ({data}: IListViewProps) => {
  const {colors} = useTheme();

  return (
    <View style={{marginBottom: 200, marginTop: 15, paddingHorizontal: 15}}>
      <ScrollView>
        {data?.map(item => (
          <TouchableHighlight
            key={item.value}
            style={{...styles.button, backgroundColor: colors.contrast}}>
            <View>
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};

export {ListView};
