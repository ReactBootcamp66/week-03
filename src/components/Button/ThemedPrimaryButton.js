import React, { useContext } from 'react';

import ThemeContext from '../../contexts/ThemeContext';

import Button from './Button';

const ThemedPrimaryButton = ({ ...restProps }) => {
  const { theme } = useContext(ThemeContext);

  // 1.yontem
  return <Button {...restProps} color={theme} />;

  // 2.yontem
  // return (
  //   <ThemeContext.Consumer>
  //     {(colors) => <Button {...restProps} color={colors.secondary} />}
  //   </ThemeContext.Consumer>
  // );
};

export default ThemedPrimaryButton;
