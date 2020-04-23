import styled from 'styled-components';
import { Form as unForm } from '@unform/web';

export const Container = styled.div`
  margin: 50px auto;
  max-width: 600px;
`;

export const Form = styled(unForm)`
  hr {
    background: rgba(255, 255, 255, 0.2);
    border: 0;
    height: 1px;
    margin: 20px 0 20px;
  }
`;
