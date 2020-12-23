import { RECEIVED_PHOTO_FROM_FB } from '../constants/facebookApi';

export const setPhotosFromFb = (photos) => ({
  type: RECEIVED_PHOTO_FROM_FB,
  payload: photos,
});
