import ACTIONS from './constants';

export const setCurrentTrack = name => ({
  type: ACTIONS.SET_CURRENT_TRACK,
  payload: name,
});

export const deleteCurrentTrack = () => ({
  type: ACTIONS.DELETE_CURRENT_TRACK,
});
