import React from 'react';
import { MdNotifications } from 'react-icons/md';
import * as S from './styles';

export default function Nitifications() {
  return (
    <S.Container>
      <S.Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </S.Badge>
      <S.NotificationList>
        <S.Scroll>
          <S.Notification unread>
            <p>agora vai de boas</p>
            <time>há 2 horas</time>
            <button type="button">Marcar como lida</button>
          </S.Notification>
          <S.Notification>
            <p>agora vai de boas</p>
            <time>há 2 horas</time>
            <button type="button">Marcar como lida</button>
          </S.Notification>
          <S.Notification>
            <p>agora vai de boas</p>
            <time>há 2 horas</time>
            <button type="button">Marcar como lida</button>
          </S.Notification>
          <S.Notification>
            <p>agora vai de boas</p>
            <time>há 2 horas</time>
            <button type="button">Marcar como lida</button>
          </S.Notification>
          <S.Notification>
            <p>agora vai de boas</p>
            <time>há 2 horas</time>
            <button type="button">Marcar como lida</button>
          </S.Notification>
          <S.Notification>
            <p>agora vai de boas</p>
            <time>há 2 horas</time>
            <button type="button">Marcar como lida</button>
          </S.Notification>
          <S.Notification>
            <p>agora vai de boas</p>
            <time>há 2 horas</time>
            <button type="button">Marcar como lida</button>
          </S.Notification>
        </S.Scroll>
      </S.NotificationList>
    </S.Container>
  );
}
