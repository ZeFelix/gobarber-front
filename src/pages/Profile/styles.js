import styled from 'styled-components';
import { Form as unForm } from '@unform/web';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 600px;
`;

export const Form = styled(unForm)`
  display: flex;
  flex-direction: column;

  hr {
    background: rgba(255, 255, 255, 0.2);
    border: 0;
    height: 1px;
    margin: 20px 0 20px;
  }
`;
