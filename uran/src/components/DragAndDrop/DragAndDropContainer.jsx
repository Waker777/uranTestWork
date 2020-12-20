import React from 'react';
import { BackButton } from '../BackButton';
import { DropZone } from './DropZone';

export const DragAndDropContainer = () => {
  return (
    <div className="drop-area__container">
      <BackButton />
      <p className="drop-area__title">Drop image</p>
      <div className="drop-area__content">
        <DropZone />
      </div>
    </div>
  );
};
