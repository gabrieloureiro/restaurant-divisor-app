import React from "react";

import { ButtonWrapper, ButtonText } from "./styles";

const Button = ({ children, ...rest }) => {
  return (
    <ButtonWrapper {...rest} style={{ borderRadius: 10 }}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
