import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  background: ${(props) => (props.color ? props.color : '#3b9eff')};
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 44px;
  margin: 5px 0 0;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: ${(props) =>
    props.color ? darken(0.08, props.color) : darken(0.08, '#3b9eff')};
  }
`;
