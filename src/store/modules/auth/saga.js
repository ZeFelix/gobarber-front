import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';
import actionType from './actionsType';

import history from '~/services/history';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { user, token } = response.data;

    if (!user.provider) {
      toast.warn('Usuário não é prestador');
    } else {
      yield put(signInSuccess(token, user));
      history.push('/dashboard');
    }
  } catch (error) {
    const { message } = error.response.data;
    toast.error(message);
    yield put(signFailure());
  }
}

export default all([takeLatest(actionType.SIGN_IN_REQUEST, signIn)]);
