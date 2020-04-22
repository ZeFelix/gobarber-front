import produce from 'immer';

import authActionType from '~/store/modules/auth/actionsType';

const initialState = {
  profile: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case authActionType.SIGN_IN_SUCCESS:
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
      });

    default:
      return state;
  }
}
