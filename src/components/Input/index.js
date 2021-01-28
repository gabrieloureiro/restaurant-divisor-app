/* eslint-disable prettier/prettier */
import React from 'react';
import { InputWrapper, InputText, Icon } from './styles';

const Input = ({ name, icon, ...rest }) => {
  return (
    <InputWrapper>
      {/* <Icon name={icon} size={20} color="#666360" /> */}
      <InputText
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </InputWrapper>
  );
};

export default Input;
