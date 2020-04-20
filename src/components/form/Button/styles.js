import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  background: #3b9eff;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 44px;
  margin: 5px 0 0;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#3b9eff')};
  }
`;
