import React, { useState } from 'react';
import useTimeout from '../../hooks/useTimeout';
import Loader from '../Loader/Loader';

const Layout = ({ className, children }) => {
  const [isLoading, setLoading] = useState(true);

  useTimeout(() => {
    console.log('Merhaba useTimeout');
    setLoading(false);
  }, 5);

  if (isLoading) {
    return <Loader />;
  }

  return <div className={className}>{children}</div>;
};

export default Layout;
