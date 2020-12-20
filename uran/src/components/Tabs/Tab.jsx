import React from 'react';
import { useHistory } from 'react-router-dom';

export const Tab = ({ ariaLabel, className, linkTo }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(linkTo);
  };
  return (

    <button
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel}
    />

  );
};
