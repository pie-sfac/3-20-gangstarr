import React, { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        callback();
      }
    };

    const handleInputEsc = (
      event: React.KeyboardEvent<HTMLDivElement>,
    ): void => {
      if (event.code === 'Escape') callback();
    };

    document.addEventListener('keydown', () => handleInputEsc);
    document.addEventListener('mousedown', () => handleClick);

    return () => {
      document.removeEventListener('keydown', () => handleInputEsc);
      document.removeEventListener('mousedown', () => handleClick);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
