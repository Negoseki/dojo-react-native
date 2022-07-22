import {Icon, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import AppColor from '../../helpers/AppColor';
import ListItem from './ListItem';

export default ({accounts}) => {
  const [visible, setVisible] = useState(true);

  function calculateTotalAmmount() {
    return accounts.map(data => data.amount).reduce((a, b) => a + b);
  }

  function renderListItem({item}) {
    return (
      <ListItem title={item.name} value={item.amount} isVisible={visible} />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Contas e cartões </Text>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Icon
            style={styles.titleIcon}
            color={AppColor.purpleHightlight}
            size={18}
            name={visible ? 'visibility-off' : 'visibility'}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={accounts}
        renderItem={renderListItem}
        scrollEnabled={false}
      />
      <ListItem
        title="Total"
        value={calculateTotalAmmount()}
        highlight={true}
        isVisible={visible}
      />

      <TouchableOpacity>
        <View style={styles.viewCards}>
          <Text style={styles.linkCards}>Ir para contas e cartões</Text>
          <Icon
            size={18}
            color={AppColor.purpleHightlight}
            name="credit-card"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    position: 'absolute',
    right: 0,
    left: 0,
    backgroundColor: AppColor.purple,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  titleRow: {
    flexDirection: 'row',
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  titleIcon: {
    marginRight: 16,
  },
  viewCards: {
    paddingTop: 8,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkCards: {
    paddingRight: 4,
    color: AppColor.purpleHightlight,
    fontWeight: '700',
  },
});
