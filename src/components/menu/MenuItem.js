import {Icon, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppColor from '../../helpers/AppColor';

export default ({icon, isEnabled, name, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.container}>
        <Icon color={isEnabled ? AppColor.purple : 'gray'} name={icon} />
        <Text
          style={{
            ...styles.text,
            ...{color: isEnabled ? AppColor.purple : 'gray'},
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});
