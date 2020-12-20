import React from 'react';
import { AlbumCard } from './AlbumCard';

export const AlbumsContainer = ({ albumsArray }) => (
  <div className="albums-container">

    {
        albumsArray.map((album, index) => (
          <AlbumCard
            key={album.id}
            indexAlbum={index}
            albumImage={album.picture.data.url}
            albumName={album.name}
            albumLength={album.photos.data.length}
            allPhotos={album.photos.data}
          />
        ))
      }
  </div>
);
