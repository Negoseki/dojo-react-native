/* eslint-disable react-native/no-inline-styles */
import {Card, Icon, Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppColor from '../../helpers/AppColor';

export default ({data}) => {
  const calculateGoalPercentage = () =>
    Math.ceil((data.planning.income / data.planning.planned) * 100) + '%';
  const calculateGoal = () => data.planning.planned - data.planning.income;
  return (
    <Card containerStyle={styles.containerStyle}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Planejamento do mês</Text>
        <Icon name="more-vert" size={22} color={AppColor.purpleHightlight} />
      </View>

      <Text style={styles.sectionTitle}> Renda</Text>

      <View>
        <View style={{...styles.row, ...styles.space}}>
          <Text style={styles.textRenda}> R$ {data.planning.income}</Text>
          <View style={styles.row}>
            <Text style={styles.plannedTitle}>planejados</Text>
            <Text> R$ {data.planning.planned}</Text>
          </View>
        </View>
      </View>
      <View style={{height: 20, backgroundColor: 'lightblue'}}>
        <View
          style={{
            height: 20,
            backgroundColor: 'lightgreen',
            width: calculateGoalPercentage(),
          }}
        />
      </View>
      <View style={{...styles.row, ...{paddingTop: 4}}}>
        <Text style={styles.bold}>R$ {calculateGoal()}</Text>
        <Text> para alcançar o planejado</Text>
      </View>

      <Text style={styles.sectionTitle}> Gastos</Text>
      <Text style={styles.textRenda}> R$ {data.planning.outgoing}</Text>
    </Card>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 8,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  titleText: {
    fontSize: 18,
  },

  sectionTitle: {
    color: 'gray',
    paddingBottom: 4,
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
  },
  space: {
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  plannedTitle: {
    color: 'gray',
    fontSize: 12,
  },
  textRenda: {
    fontSize: 26,
    fontWeight: '700',
    paddingBottom: 4,
  },
  bold: {
    fontWeight: '700',
  },
});
