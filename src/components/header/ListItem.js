import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppColor from '../../helpers/AppColor';

export default ({title, value, isVisible, highlight}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dots}>
        ......................................................................................
      </Text>
      <Text style={styles.text}>{title}</Text>

      <Text style={highlight ? styles.highlight : styles.text}>
        {isVisible ? `R$ ${value}` : '$$$'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text: {
    color: 'white',
    backgroundColor: AppColor.purple,
    paddingRight: 4,
    paddingLeft: 4,
    fontSize: 16,
    fontWeight: '600',
  },
  highlight: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    backgroundColor: AppColor.purple,
    paddingLeft: 4,
  },
  dots: {
    position: 'absolute',
    color: 'white',
    bottom: 8,
  },
});
