import React from 'react';

import { DisplayContainer, DisplayValue } from './styles';

const Display = props => (
  <DisplayContainer>
    <DisplayValue numberOfLines={1}>{props.value}</DisplayValue>
  </DisplayContainer>
);

export default Display;
