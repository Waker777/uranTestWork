import { SET_PHOTO } from '../constants/common';

export const setPhotoCard = (photo) => ({
  type: SET_PHOTO,
  payload: photo,
});
