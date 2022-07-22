import {Icon, Text} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppColor from '../../helpers/AppColor';
import ExpandedPanel from './ExpandedPanel';

export default ({data}) => {
  const [expanded, setExpanded] = useState(false);
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.container, ...{paddingTop: insets.top}}}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={styles.expandView}>
          <Text style={styles.expandTitle}>Julho</Text>
          <Icon
            color={AppColor.purpleHightlight}
            name={expanded ? 'expand-less' : 'expand-more'}
          />
        </View>
      </TouchableOpacity>
      <View style={expanded ? styles.show : styles.hide}>
        <ExpandedPanel accounts={data.accounts} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.purple,
    justifyContent: 'center',
  },
  expandTitle: {
    color: 'white',
    padding: 16,
    fontSize: 18,
    fontWeight: '700',
  },
  expandView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  show: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
});
