import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MenuItem from './MenuItem';

export default () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{...styles.container, ...{paddingBottom: insets.bottom}}}>
      <MenuItem
        icon="bar-chart"
        name="Finanças"
        isEnabled={true}
        onPress={() => console.log('press Finanças')}
      />
      <MenuItem
        icon="attach-money"
        name="Empréstimos"
        onPress={() => console.log('press Emprestimos')}
      />
      <MenuItem
        icon="shopping-bag"
        name="Soluções"
        onPress={() => console.log('press Soluções')}
      />
      <MenuItem
        icon="settings"
        name="Ajustes"
        onPress={() => console.log('press Ajustes')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
});
