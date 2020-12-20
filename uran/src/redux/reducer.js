import { RECEIVED_PHOTO_FROM_FB, RESPONSE_FROM_FB } from './constants/facebookApi';
import { SET_ALBUM, SET_PHOTO } from './constants/common';

const initialState = {
  response: {},
  photos: [],
  currentAlbum: 0,
  currentPhoto: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_PHOTO_FROM_FB: {
      return {
        ...state,
        photos: action.payload,
      };
    }
    case RESPONSE_FROM_FB: {
      return {
        ...state,
        response: action.payload,
      };
    }
    case SET_ALBUM: {
      return {
        ...state,
        currentAlbum: action.payload,
      };
    }
    case SET_PHOTO: {
      return {
        ...state,
        currentPhoto: action.payload,
      };
    }
    default: return state;
  }
};
