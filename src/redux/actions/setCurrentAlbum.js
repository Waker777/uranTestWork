import { SET_ALBUM } from '../constants/common';

export const setCurrentAlbum = (indexAlbum) => ({
  type: SET_ALBUM,
  payload: indexAlbum,
});
