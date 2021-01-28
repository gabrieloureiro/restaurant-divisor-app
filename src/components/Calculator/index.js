/* eslint-disable no-shadow */
/* eslint-disable use-isnan */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView, Image } from 'react-native';
import { Share } from 'react-native';

import dividerLogo from '../../assets/img/divider.png';
import Button from '../Button';

import Input from '../Input';

import { Container, Title, Value } from './styles';

const Calculator = () => {

  const [totalValue, setTotalValue] = useState(0);
  const [personQuantity, setPersonQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const share = () => {
    if (!disabled) {
      Share.share({
        message: `O valor de R$ ${totalValue},00 dividido para ${personQuantity} pessoas foi de R$ ${totalValue / personQuantity},00`,
        title: 'Enviar valor para amigos',
      }, {
        dialogTitle: 'Enviar valor para amigos',
      }).then(({ action, activityType }) => {
        if (action === Share.sharedAction) { console.log('Share was successful'); }
        else { console.log('Share was dismissed'); }
      });
    }

  };


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

  useEffect(() => {
    if (totalValue !== '' && personQuantity !== '' && personQuantity !== 0) {
      setDisabled(false);
    }
  }, [totalValue, personQuantity]);

  useEffect(() => {
    if (totalValue === '' || personQuantity === '') {
      setDisabled(true);
    }
  }, [totalValue, personQuantity]);

  return (
    <Fragment>
      <Image style={{ resizeMode: 'cover', width: '100%', height: '20%' }} source={dividerLogo} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>

          <Container>
            <View>
              <Title>Divida o valor da conta com seus amigos</Title>
            </View>
            <Input keyboardType="numeric" name="totalValue" icon="mail" placeholder="Valor total" onChangeText={text => setTotalValue(text)} />
            <Input keyboardType="numeric" name="personQuantity" icon="lock" placeholder="Número de pessoas" onChangeText={text => setPersonQuantity(text)} />
            <Value>{validateDivision(totalValue, personQuantity).toString() === 'NaN' ? 'Insira valores válidos' : validateDivision(totalValue, personQuantity)}</Value>
            <Button disabled={disabled} title="Compartilhar" color="#6e37e0" onPress={share} />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default Calculator;
