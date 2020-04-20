import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function InputError({ message }) {
  return <S.Error>{message}</S.Error>;
}

InputError.propTypes = {
  message: PropTypes.string.isRequired,
};
