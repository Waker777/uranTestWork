import { RESPONSE_FROM_FB } from '../constants/facebookApi';

export const setResponseFromFB = (data) => ({
  type: RESPONSE_FROM_FB,
  payload: data,
});
