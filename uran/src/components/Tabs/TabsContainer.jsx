import React from 'react';
import { Tab } from './Tab';
import './tabs.scss';

export const TabsContainer = () => (
  <div className="tabs-container">
    <div className="tabs-buttons">
      <Tab
        linkTo="/albums"
        ariaLabel="album"
        className="tab-album"
      />
      <Tab
        linkTo="/download"
        ariaLabel="download"
        className="tab-download-photo"
      />
    </div>
  </div>
);
