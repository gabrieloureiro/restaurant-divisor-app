/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 0 32px ${Platform.OS === 'android' ? 170 : 50}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #6e37e0;

  text-align: center;
  font-family: 'Poppins-Regular';
  padding: 64px 0 24px;
`;

export const Value = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #6e37e0;
  text-align: center;
  font-family: 'Poppins-Regular';
  padding: 64px 0 24px;
`;
