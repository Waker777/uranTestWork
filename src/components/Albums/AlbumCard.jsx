import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentAlbum } from '../../redux/actions';
import './album.scss';

export const AlbumCard = ({
  albumName,
  albumImage,
  albumLength,
  indexAlbum,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    history.push(`/album/${albumName}`);
    dispatch(setCurrentAlbum(indexAlbum));
  };

  return (

    <div
      className="album-card__container"
      onClick={handleClick}
      role="menuitem"
      tabIndex="0"
      onKeyPress={handleClick}

    >

      <div className="album-card__image-container">
        <img className="album-card__image" src={albumImage} alt="album" />
      </div>
      <div className="album-card__info">
        <p className="album-card__name">{albumName}</p>
        <p className="album-card__files">{`Files ${albumLength}`}</p>
      </div>
    </div>

  );
};
