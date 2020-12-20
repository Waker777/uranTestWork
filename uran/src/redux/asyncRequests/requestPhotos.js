import axios from 'axios';

export const requestUserPhotos = (userID, accessToken, action) => (dispatch) => {
  axios.get(`https://graph.facebook.com/${userID}/albums?access_token=${accessToken}&fields=photos{name,picture},name,picture`)
    .then((res) => dispatch(action(res.data))).catch((error) => {
      console.warn(error);
    });
};
