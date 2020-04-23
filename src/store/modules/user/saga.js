import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

import userAction from './actionsType';

function* updateProfile({ payload }) {
  try {
    const { id, name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, `users/${id}`, profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    const { message } = error.response.data;
    if (message) {
      toast.error(message);
      return;
    }

    toast.error('Ocorreu um erro');
    yield put(updateProfileFailure());
  }
}

function* updateAvatar({ payload }) {
  try {
    const { file, profile } = payload;

    const response = yield call(api.post, 'files', file);

    const { id, path, url } = response.data;

    const newProfile = { ...profile, avatar: { id, path, url } };

    toast.success('Imagem salva com sucesso');

    yield put(updateProfileSuccess(newProfile));
  } catch (error) {
    const { message } = error.response.data;
    if (message) {
      toast.error(message);
      return;
    }

    toast.error('Ocorreu um erro');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(userAction.UPDATE_PROFILE_REQUEST, updateProfile),
  takeLatest(userAction.UPDATE_AVATAR_REQUEST, updateAvatar),
]);
