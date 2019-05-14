import ACTIONS from './constants';

const initialState = {
  CURRENT_TRACK: '',
};

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_TRACK:
      return {
        ...state,
        CURRENT_TRACK: action.payload,
      };
    case ACTIONS.DELETE_CURRENT_TRACK:
      return {
        ...state,
        CURRENT_TRACK: '',
      };
    default:
      return state;
  }
}
