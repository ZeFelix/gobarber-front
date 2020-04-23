import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function AvatarInput({
  avatarId,
  avatarUrl,
  handleSubmmitAvatar,
}) {
  const { registerField } = useField('avatar');
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: 'avatar_id',
      ref: inputRef.current,
      path: 'dataset.file',
    });
  }, [registerField]);

  function handleInputChange(input) {
    const data = new FormData();
    data.append('file', input.target.files[0]);
    handleSubmmitAvatar(data);
  }

  return (
    <S.Container>
      <label htmlFor="avatar">
        <img src={avatarUrl} alt="" />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={avatarId}
          ref={inputRef}
          onChange={handleInputChange}
        />
      </label>
    </S.Container>
  );
}

AvatarInput.defaultProps = {
  avatarId: null,
  avatarUrl: '',
};

AvatarInput.propTypes = {
  handleSubmmitAvatar: PropTypes.func.isRequired,
  avatarId: PropTypes.number,
  avatarUrl: PropTypes.string,
};
