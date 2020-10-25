import React, { useContext } from 'react';

import ThemeContext, { colors } from '../../contexts/ThemeContext';

import { PrimaryButton } from '../Button';

const SwitchTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleToogleTheme = () => {
    setTheme(theme === colors.primary ? colors.secondary : colors.primary);
  };

  const handleMouseEnter = () => {
    console.log('mouse enter');
    handleToogleTheme();
  };

  const handleMouseLeave = () => {
    console.log('mouse leave');
    handleToogleTheme();
  };

  return (
    <>
      Theme: {theme}
      <PrimaryButton
        text="Change Theme"
        type="button"
        onClick={handleToogleTheme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default SwitchTheme;
