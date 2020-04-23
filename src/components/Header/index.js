import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/img/logo24.svg';
import Notification from '~/components/Notifications';

import * as S from './styles';

export default function Header() {
  const { profile } = useSelector((state) => state.user);

  return (
    <S.Container>
      <S.Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notification />
          <S.Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Perfil</Link>
            </div>
            <img
              src={profile.avatar && profile.avatar.url}
              alt="Nome da peça"
            />
          </S.Profile>
        </aside>
      </S.Content>
    </S.Container>
  );
}
