import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleInputEsc = (event: any) => {
      if (event.code === 'Escape') callback();
    };

    document.addEventListener('keydown', handleInputEsc);
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('keydown', handleInputEsc);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
