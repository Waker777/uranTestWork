import React from 'react';
import { useSelector } from 'react-redux';
import { PhotoCard } from './PhotoCard';
import { BackButton } from '../BackButton';
import './photos.scss';

export const PhotoContainer = () => {
  const photoAray = useSelector((state) => state.photos.data);
  const chosedAlbum = useSelector((state) => state.currentAlbum);

  return (
    <>
      <BackButton />
      <div className="photos-container">
        { photoAray ? photoAray[chosedAlbum].photos.data.map((photo) => {
          const fileName = photo.picture
            .match(/\/\S+.jpg/)[0]
            .split('/')
            .find((element) => element.match(/\S+.jpg/));
          return (
            <PhotoCard
              key={photo.id}
              imageDescription={photo.name}
              imageSrc={photo.picture}
              fileName={fileName}
            />
          );
        }) : null}
      </div>

    </>
  );
};
