import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPhotoCard } from '../../redux/actions';
import './photos.scss';

export const PhotoCard = ({ imageSrc, imageDescription, fileName }) => {
  const [cardDescriptionVisibility, setcardDescriptionVisibility] = useState(false);
  const handleHoverCard = () => {
    setcardDescriptionVisibility(!cardDescriptionVisibility);
  };
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChooseCard = () => {
    history.push(`/photo/${fileName}`);
    dispatch(setPhotoCard({
      url: imageSrc,
      text: imageDescription,
      fileName,
    }));
  };
  return (
    <div
      className="photos__card-container"
      onClick={handleChooseCard}
      onMouseEnter={handleHoverCard}
      onMouseLeave={handleHoverCard}
      role="button"
      tabIndex="0"
      onKeyDown={handleChooseCard}

    >
      <div className="photos__card">
        <img src={imageSrc} alt="card" className="photos__card-image" />
        {cardDescriptionVisibility && (
        <div className="photos__card-description">
          <p className="photos__card-description-text">
            File name:
            {' '}
            {fileName}
          </p>
          <p className="photos__card-description-text">
            Description:
            {' '}
            {imageDescription || 'empty'}
          </p>
        </div>
        )}
      </div>

    </div>
  );
};
