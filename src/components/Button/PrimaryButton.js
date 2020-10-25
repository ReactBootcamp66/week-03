import React from 'react';
import Button from './Button';

const PrimaryButton = ({ ...restProps }) => {
  const color = 'blue';
  return <Button {...restProps} color={color} />;
};

export default PrimaryButton;
