import React, { useEffect } from 'react';

// 1 sn = 1000 x sn = ms
const useTimeout = (callback, timeoutInSeconds) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      callback();
    }, timeoutInSeconds * 1000);

    return () => {
      clearTimeout(timerId);
    };
  });
};

export default useTimeout;
