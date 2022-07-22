import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Menu from './src/components/menu/Menu';
import AppColor from './src/helpers/AppColor';
import Home from './src/pages/home/Home';

export default () => {
  return (
    <SafeAreaProvider
      style={styles.container}
      statusBarBackgroundColor={AppColor.purple}>
      <View style={styles.content}>
        <Home />
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    zIndex: 3,
  },
  content: {
    flex: 1,
    marginBottom: 100,
  },
  menu: {
    zIndex: 3,
    height: 80,
  },
});
