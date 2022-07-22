import {Card, Icon, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import PromotionIcon from './PromotionIcon';

// {
//     "id": "818da73b-9573-4216-865f-f915ac65537d",
//     "icon": "account-balance",
//     "background_color": "#6a1b9a",
//     "font_color": "white",
//     "text": "Descomplicamos o open banking.",
//     "type": "RECOMMENDATION"
//   },
export default ({item}) => {
  return (
    <Card
      containerStyle={{
        ...styles.card,
        ...{backgroundColor: item.background_color},
      }}
      wrapperStyle={styles.cardInner}>
      <View style={styles.cardTextWrapper}>
        <Text style={{...styles.cardText, ...{color: item.font_color}}}>
          {item.text}
        </Text>
      </View>
      <View>
        <PromotionIcon />
        <Icon style={styles.icon} size={18} name={item.icon} />
        <Text style={styles.typeText}>{itemType[item.type]} </Text>
      </View>
    </Card>
  );
};

const itemType = {
  RECOMMENDATION: 'RECOMENDAÇÃO',
  OPPORTUNITY: 'OPORTUNIDADE',
};

const styles = StyleSheet.create({
  card: {
    maxWidth: 150,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardInner: {
    justifyContent: 'space-between',
  },
  cardTextWrapper: {
    marginBottom: 16,
    marginTop: 8,
  },
  cardText: {
    fontWeight: '700',
    fontSize: 14,
  },
  icon: {
    backgroundColor: 'white',
    width: 24,
    height: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  typeText: {
    marginTop: 4,
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
