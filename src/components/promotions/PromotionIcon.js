import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppColor from '../../helpers/AppColor';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.guiabolso}>Guiabolso +</Text>

      <Text style={styles.picpay}> PicPay</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  guiabolso: {
    color: AppColor.blue,
    fontSize: 12,
  },
  picpay: {
    color: 'white',
    fontSize: 12,
  },
});
