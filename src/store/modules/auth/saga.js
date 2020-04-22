import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess } from './actions';
import actionType from './actionsType';

import history from '~/services/history';

function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', { email, password });

  const { user, token } = response.data;

  if (!user.provider) {
    console.tron.error('Usuário não é prestador');
  } else {
    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  }
}

export default all([takeLatest(actionType.SIGN_IN_REQUEST, signIn)]);
