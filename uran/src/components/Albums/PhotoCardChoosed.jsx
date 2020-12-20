import React from 'react';
import { useSelector } from 'react-redux';
import { BackButton } from '../BackButton';
import './photos.scss';

export const PhotoCardChoosed = () => {
  const { fileName, url, text } = useSelector((state) => state.currentPhoto);

  return (
    <div className="photos-card__choosed-card-container">
      <div className="photos-card__choosed-top">

        <BackButton />
        <p className="photos-card__file-name">{fileName}</p>
      </div>
      <div className="photos-card__choosed-card">
        <img src={url} alt={fileName} className="photos-card__choosed-card-img" />
        <p className="photos-card__choosed-card-name">
          File name:
          {' '}
          {fileName}
        </p>
        <p className="photo-card__choosed-card-text">
          Description:
          {' '}
          {text || 'empty'}
        </p>
      </div>
    </div>
  );
};
