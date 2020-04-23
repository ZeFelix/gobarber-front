import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import scheduleActionsType from './actionsType';
import { scheduleSuccess } from './actions';

function* scheduleRequest({ payload }) {
  try {
    const { date } = payload;

    const response = yield call(api.get, 'schedules', { params: { date } });
    yield put(scheduleSuccess(response.data));
  } catch (error) {
    const { message } = error.response.data;

    if (message) {
      toast.error(message);
      return;
    }

    toast.error('Aconteceu algum erro');
  }
}

export default all([
  takeLatest(scheduleActionsType.SCHEDULES_REQUET, scheduleRequest),
]);
