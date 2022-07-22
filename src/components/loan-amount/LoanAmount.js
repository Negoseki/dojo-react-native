import {BlurView} from '@react-native-community/blur';
import {Card, Icon, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AppColor from '../../helpers/AppColor';

export default ({data}) => {
  return (
    <Card containerStyle={styles.card}>
      <Text style={styles.title}>
        Descubra o valor do empréstimo que você pode levar agora mesmo:
      </Text>
      <View>
        <Text style={styles.loanAmount}>R$ {data.loan_amount}</Text>
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={4}
          reducedTransparencyFallbackColor="white"
        />
      </View>
      <TouchableOpacity>
        <View style={styles.linkWrapper}>
          <Text style={styles.linkText}>Descubra o valor </Text>
          <Icon
            size={18}
            color={AppColor.purpleHightlight}
            name="arrow-forward"
          />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    padding: 8,
    paddingBottom: 16,
  },
  loanAmount: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 8,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  linkWrapper: {
    flexDirection: 'row',
    padding: 8,
    paddingTop: 24,
  },
  linkText: {
    color: AppColor.purpleHightlight,
  },
});
