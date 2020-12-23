/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TabsContainer } from './components/Tabs/TabsContainer';
import { AlbumsContainer, PhotoContainer, PhotoCardChoosed } from './components/Albums';
import { DragAndDropContainer } from './components/DragAndDrop/DragAndDropContainer';
import { requestUserPhotos } from './redux/asyncRequests/requestPhotos';
import { setResponseFromFB, setPhotosFromFb } from './redux/actions';

import './App.scss';

const App = function () {
  const [login, setLogin] = useState(false);
  const userName = useSelector((state) => state.response.name);
  const photoArray = useSelector((state) => state.photos.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const responseFacebook = (response) => {
    const userId = response.id;
    if (response.accessToken) {
      setLogin(true);

      dispatch(requestUserPhotos(userId, response.accessToken, setPhotosFromFb));

      dispatch(setResponseFromFB(response));
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="app">
      {!login
      && (
      <div className="auth__container">
        <p className="auth__title">Sign in on your account</p>
        <FacebookLogin
          appId="1912593132243486"
          autoLoad
          fields="albums,name"
          scope="public_profile,user_photos"
          callback={responseFacebook}
          icon="fa-facebook"
          textButton=""
          cssClass="auth__button"
          version="9.0"
        />
      </div>
      )}
      {login
      && (
      <div className="container">
        <TabsContainer />
        {location.pathname === '/albums' && (
        <p>
          Welcome
          {' '}
          {userName}
        </p>
        )}
        <Switch>
          <Route path="/albums">
            <AlbumsContainer albumsArray={photoArray || []} />
          </Route>
          <Route path="/album/:album">
            <PhotoContainer />
          </Route>
          <Route path="/photo/:name">
            <PhotoCardChoosed />
          </Route>
          <Route path="/download">
            <DragAndDropContainer />
          </Route>
        </Switch>
      </div>
      )}

    </div>
  );
};

export default App;
