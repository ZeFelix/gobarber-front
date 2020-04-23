import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import * as S from './styles';

export default function Dashboard() {
  return (
    <S.Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>data tal</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        <S.Time>
          <strong>horario</strong>
          <span>nome do cidadão</span>
        </S.Time>
        <S.Time>
          <strong>horario</strong>
          <span>nome do cidadão</span>
        </S.Time>
        <S.Time>
          <strong>horario</strong>
          <span>nome do cidadão</span>
        </S.Time>
        <S.Time>
          <strong>horario</strong>
          <span>nome do cidadão</span>
        </S.Time>
      </ul>
    </S.Container>
  );
}
