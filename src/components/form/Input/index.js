import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import InputError from '~/components/form/utils/InputError';

import * as S from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.InputWrapper>
      <S.Input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <InputError message={error} />}
    </S.InputWrapper>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
