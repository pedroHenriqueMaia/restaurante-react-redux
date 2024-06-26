import React from 'react';
import { IPropsAlert } from '../../models/utils/props-alert';

const Alert: React.FC<IPropsAlert> = ({ message }) => {
  return <div className="alert text-center">{message}</div>;
};

export default Alert;
