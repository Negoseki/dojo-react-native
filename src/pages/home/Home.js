import {DialogLoading} from '@rneui/base/dist/Dialog/Dialog.Loading';
import {FAB} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Api from '../../api/Api';
import AccountBalance from '../../components/account-balance/AccountBalance';
import DialogAddAccount from '../../components/dialogs/DialogAddAccount';
import Header from '../../components/header/Header.js';
import LoanAmount from '../../components/loan-amount/LoanAmount';
import Promotions from '../../components/promotions/Promotions';
import AppColor from '../../helpers/AppColor';

export default () => {
  const [data, setResponseData] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const createAccount = async ({name, amount, type}) => {
    await Api.postData({name: name, amount, type});
    setDialogVisible(false);
  };

  useEffect(() => {
    console.log('effect');
    Api.update(result => setResponseData(result));
  }, [data]);

  return data ? (
    <View>
      <View style={styles.header}>
        <Header data={data} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Promotions data={data} />
          <AccountBalance data={data} />
          <LoanAmount data={data} />
        </View>
        <View style={styles.spacer} />
      </ScrollView>
      <FAB
        style={styles.fab}
        visible={true}
        color={AppColor.purpleHightlight}
        onPress={() => setDialogVisible(true)}
        icon={{name: 'add', color: 'white'}}
        size="big"
      />
      <DialogAddAccount
        visible={dialogVisible}
        onCancel={() => setDialogVisible(false)}
        onConfirm={createAccount}
      />
    </View>
  ) : (
    <View style={{...styles.container, ...{justifyContent: 'center'}}}>
      <DialogLoading />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
  },
  header: {
    zIndex: 3,
  },
  spacer: {
    height: 120,
  },
  fab: {
    position: 'absolute',
    zIndex: 10,
    bottom: 16,
    right: 16,
  },
});
