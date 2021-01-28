import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const InputWrapper = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  background: #e1e1e1;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: 'Poppins-Regular';
  color: #000;
`;
