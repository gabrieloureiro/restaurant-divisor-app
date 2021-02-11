/* eslint-disable no-shadow */
/* eslint-disable use-isnan */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, View, ScrollView, Image, Share } from 'react-native';

import dividerLogo from '../../assets/img/divider.png';

import Button from '../Button';
import Input from '../Input';
import { Container, Title, Value } from './styles';

import { translate } from '../../locales'

const Calculator = () => {

  const [totalValue, setTotalValue] = useState(0);
  const [personQuantity, setPersonQuantity] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const share = () => {
    if (!disabled) {
      Share.share({
        message:
          `${translate('shareMessagepartOne')}
          ${totalValue}${translate('shareMessagepartTwo')}
          ${personQuantity}
          ${translate('shareMessagepartThree')}
          ${totalValue / personQuantity}${translate('shareMessagepartFour')}`,
        title: translate('shareMessageTitle'),
      }, {
        dialogTitle: translate('shareMessageTitle'),
      }).then(({ action, activityType }) => {
        if (action === Share.sharedAction) { console.log('Share was successful'); }
        else { console.log('Share was dismissed'); }
      });
    }

  };

  const validateDivision = (totalValue, personQuantity) => {
    if (totalValue / personQuantity === Infinity) {
      return translate('errorPerson');
    }

    if (totalValue === '' && personQuantity !== '') {
      return translate('errorValue');
    }
    if (personQuantity === 0) {
      return translate('errorPersonZero');
    }

    if (totalValue !== '' && personQuantity !== '' && personQuantity !== 0) {
      return `${translate('currency')} ${totalValue / personQuantity}`;
    }

    return translate('messageEmpty');
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled>
        <Image style={{ resizeMode: 'cover', width: '100%', height: '27.5%' }} source={dividerLogo} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <View>
              <Title>{translate('title')}</Title>
            </View>
            <Input keyboardType="numeric" name="totalValue" icon="mail" placeholder={translate('totalValue')} onChangeText={text => setTotalValue(text)} />
            <Input keyboardType="numeric" name="personQuantity" icon="lock" placeholder={translate('personQuantity')} onChangeText={text => setPersonQuantity(text)} />
            <Value>{validateDivision(totalValue, personQuantity).toString() === 'NaN' ? translate('validValues') : validateDivision(totalValue, personQuantity)}</Value>
            <Button disabled={disabled} title={translate('shareButton')} color="#6e37e0" onPress={share} />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Fragment>
  );
};

export default Calculator;
