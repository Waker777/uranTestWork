import React from 'react';
import { useHistory } from 'react-router-dom';

export const BackButton = () => {
  const history = useHistory();
  const handleBackButton = () => {
    history.goBack();
  };
  return (
    <button className="go-back" aria-label="go-back" onClick={handleBackButton} />
  );
};
