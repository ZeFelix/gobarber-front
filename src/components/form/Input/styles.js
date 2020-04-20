import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  color: #fff;
  height: 44px;
  padding: 0 15px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;
