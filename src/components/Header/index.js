import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/img/logo24.svg';
import Notification from '~/components/Notifications';

import * as S from './styles';

export default function Header() {
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
              <strong>Nome da peça</strong>
              <Link to="/profile">Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/30/abott@adorable.png"
              alt="Nome da peça"
            />
          </S.Profile>
        </aside>
      </S.Content>
    </S.Container>
  );
}
