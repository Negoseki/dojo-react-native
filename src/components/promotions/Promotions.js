import {Text} from '@rneui/themed';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PromotionCard from './PromotionCard';

export default ({data}) => {
  function renderPromotion({item}) {
    return <PromotionCard item={item} />;
  }

  return (
    <View>
      <Text style={styles.title}>Para você</Text>
      <FlatList
        style={styles.list}
        data={data.promotions}
        renderItem={renderPromotion}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 16,
    paddingTop: 16,
    color: 'gray',
    fontWeight: '600',
  },
  list: {},
});
