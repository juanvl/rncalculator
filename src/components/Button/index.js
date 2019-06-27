import React from 'react';
import { SquareButton, SquareButtonText } from './styles';

export default ({ onClick, label, ...props }) => (
  <SquareButton onPress={() => onClick(label)}>
    <SquareButtonText {...props}>{label}</SquareButtonText>
  </SquareButton>
);
