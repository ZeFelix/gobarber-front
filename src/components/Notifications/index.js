import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  notificationRequest,
  notificationUpdate,
} from '~/store/modules/notifications/actions';

import * as S from './styles';

export default function Nitifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const { data: notificationData } = useSelector(
    (state) => state.notifications
  );
  const dispatch = useDispatch();

  const hasUnread = useMemo(
    () =>
      Boolean(
        notifications.find((notification) => notification.read === false)
      ),
    [notifications]
  );

  useEffect(() => {
    dispatch(notificationRequest());
  }, [dispatch]);

  useEffect(() => {
    const data = notificationData.map((notification) => ({
      ...notification,
      timeDistance: formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        { addSuffix: true, locale: pt }
      ),
    }));
    setNotifications(data);
  }, [notificationData]);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(notification) {
    const newData = { ...notification, read: true };
    dispatch(notificationUpdate(notification._id, newData));
  }

  return (
    <S.Container>
      <S.Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </S.Badge>
      <S.NotificationList visible={visible}>
        <S.Scroll>
          {notifications.map((notification) => (
            <S.Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification)}
                >
                  Marcar como lida
                </button>
              )}
            </S.Notification>
          ))}
        </S.Scroll>
      </S.NotificationList>
    </S.Container>
  );
}
