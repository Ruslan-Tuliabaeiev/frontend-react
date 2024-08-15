import React from 'react';
import 'flag-icons/css/flag-icons.min.css';

export const FlagUrl = ({ countryCode }) => {
  return <span className={`fi fi-${countryCode.toLowerCase()}`}></span>;
}

