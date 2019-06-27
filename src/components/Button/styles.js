import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SquareButton = styled.TouchableHighlight``;

export const SquareButtonText = styled.Text`
  border-width: 1px;
  height: ${Dimensions.get('window').width / 4};
  width: ${Dimensions.get('window').width / 4};
  padding: 20px;
  background-color: #f0f0f0;
  border-color: #888;
  text-align: center;
  font-size: 40px;

  ${({ operation }) => operation
    && `
    color: #fff;
    background-color: #fa8231;
  `}

  ${({ double }) => double
    && `
    width: ${(Dimensions.get('window').width / 4) * 2}
    `}

  ${({ triple }) => triple
    && `
    width: ${(Dimensions.get('window').width / 4) * 3}
    `}
`;
