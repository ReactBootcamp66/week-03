import React from 'react';
import { PrimaryButton } from '../Button';

const Switch = ({ isActive, onToggle }) => {
  return (
    <>
      Switch: {isActive ? 'on' : 'off'}
      <PrimaryButton text="ChangeState" type="button" onClick={onToggle} />
    </>
  );
};

export default Switch;
