import produce from 'immer';

import actionType from './actionsType';

const initialState = {
  token: {},
  signed: false,
  loading: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actionType.SIGN_IN_SUCCESS:
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.signed = true;
      });

    default:
      return state;
  }
}
