import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { scheduleRequest } from '~/store/modules/schedule/actions';

import * as S from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const dispatch = useDispatch();
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const { data: scheduleData } = useSelector((state) => state.schedule);

  const formatedDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    dispatch(scheduleRequest(date));
  }, [dispatch, date]);

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const data = range.map((hour) => {
      const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
      const compareDate = utcToZonedTime(checkDate, timezone);

      return {
        hour: `${hour}:00h`,
        past: isBefore(compareDate, new Date()),
        appointment: scheduleData.find((a) => {
          isEqual(parseISO(a.date), compareDate);
        }),
      };
    });

    setSchedule(data);
  }, [scheduleData, date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <S.Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>{formatedDate}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <ul>
        {schedule.map((time) => (
          <S.Time
            key={time.hour}
            past={time.past}
            available={!time.appointment}
          >
            <strong>{time.hour}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </S.Time>
        ))}
      </ul>
    </S.Container>
  );
}
