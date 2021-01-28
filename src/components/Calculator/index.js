/* eslint-disable no-shadow */
/* eslint-disable use-isnan */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView, Image } from 'react-native';

import dividerLogo from '../../assets/img/divider.png';

import Input from '../Input';

import { Container, Title, Value } from './styles';

const Calculator = () => {

  const [totalValue, setTotalValue] = useState(0);
  const [personQuantity, setPersonQuantity] = useState(0);



  const validateDivision = (totalValue, personQuantity) => {
    if (totalValue / personQuantity === Infinity) {
      return 'Por favor, insira a quantidade de pessoas';
    }

    if (totalValue === '' && personQuantity !== '') {
      return 'Por favor, insira o valor a ser dividido';
    }

    if (personQuantity === 0) {
      return 'O número de pessoas nao pode ser 0';
    }

    if (totalValue !== '' && personQuantity !== '' && personQuantity !== 0) {
      return totalValue / personQuantity;
    }

    return 'Preencha os campos para obter a divisão';
  };

  return (
    <Fragment>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Image style={{ resizeMode: 'contain', width: '100%', height: '30%' }} source={dividerLogo} />
            <View>
              <Title>Divida o valor com seus amigos</Title>
            </View>
            <Input keyboardType="numeric" name="totalValue" icon="mail" placeholder="Valor total" onChangeText={text => setTotalValue(text)} />
            <Input keyboardType="numeric" name="personQuantity" icon="lock" placeholder="Número de pessoas" onChangeText={text => setPersonQuantity(text)} />
            <Value>{validateDivision(totalValue, personQuantity).toString() === 'NaN' ? 'Insira valores válidos' : validateDivision(totalValue, personQuantity)}</Value>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default Calculator;
