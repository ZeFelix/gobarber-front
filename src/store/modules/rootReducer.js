import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducers';
import notifications from './notifications/reducers';

export default combineReducers({ auth, user, notifications });
