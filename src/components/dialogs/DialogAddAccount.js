import {Picker} from '@react-native-picker/picker';
import {Dialog, Input, Text} from '@rneui/themed';
import React, {useState} from 'react';

export default ({visible, onCancel, onConfirm}) => {
  const [selectedType, setSelectedType] = useState();
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  return (
    <Dialog isVisible={visible}>
      <Dialog.Title title="Adicionar Carteira" />
      <Input
        placeholder="Nome"
        value={nome}
        onChangeText={value => setNome(value)}
      />

      <Input
        placeholder="Valor"
        value={valor}
        onChangeText={value => setValor(value)}
      />

      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}>
        <Picker.Item label="Dinheiro" value="MONEY" />
        <Picker.Item label="Carteira" value="WALLET" />
        <Picker.Item label="Cartão de Crédito" value="CREDIT_CARD" />
        <Picker.Item label="Conta Corrente" value="CHECKING" />
      </Picker>
      <Dialog.Actions>
        <Dialog.Button
          title="Confirmar"
          onPress={() =>
            onConfirm({name: nome, amount: valor, type: selectedType})
          }
        />
        <Dialog.Button title="Cancelar" onPress={() => onCancel()} />
      </Dialog.Actions>
    </Dialog>
  );
};
