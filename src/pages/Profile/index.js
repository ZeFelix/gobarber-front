import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateProfileRequest,
  updateAvatarRequest,
} from '~/store/modules/user/actions';

import Input from '~/components/form/Input';
import Button from '~/components/form/Button';
import AvatarInput from './AvatarInput';

import * as S from './styles';

export default function Profile() {
  const formRef = useRef(null);
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    formRef.current.setData(profile);
  }, [profile]);

  function handleSubmmit() {
    const data = { id: profile.id, ...formRef.current.getData() };
    dispatch(updateProfileRequest(data));
  }

  function handleSubmmitAvatar(file) {
    dispatch(updateAvatarRequest(file, profile));
  }

  return (
    <S.Container>
      <S.Form ref={formRef} onSubmit={handleSubmmit}>
        <AvatarInput
          name="avatar_id"
          avatarId={profile.avatar && profile.avatar.id}
          avatarUrl={profile.avatar && profile.avatar.url}
          handleSubmmitAvatar={handleSubmmitAvatar}
        />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme a senha"
        />
        <Button type="submit">Atualizar perfil</Button>
      </S.Form>
      <Button type="button" color="#f64c75">
        Sair
      </Button>
    </S.Container>
  );
}
