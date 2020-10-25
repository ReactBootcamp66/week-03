import React from 'react';

const Button = ({ color, text, ...restProps }) => {
  return (
    <button style={{ color: color }} {...restProps}>
      {text}
    </button>
  );
};

export default Button;
