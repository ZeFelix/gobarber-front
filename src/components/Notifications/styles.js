import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        background: #ff892e;
        border-radius: 50%;
        content: '';
        height: 8px;
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
      }
    `}
`;

export const NotificationList = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  left: calc(50% - 130px);
  padding: 15px 5px;
  position: absolute;
  top: calc(100% + 30px);
  width: 260px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 15px;
    padding-top: 15px;
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
    opacity: 0.6;
  }

  button {
    background: none;
    border: 0;
    color: ${lighten(0.2, '#7159c1')};
    font-size: 12px;
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        background: #ff892e;
        border-radius: 50%;
        content: '';
        display: inline-block;
        height: 8px;
        margin-left: 10px;
        width: 8px;
      }
    `}
`;
