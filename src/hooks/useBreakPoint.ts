import { useEffect, useState } from 'react';

export const useBreakPoint = () => {
  const [breakPoint, setBreakPoint] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBreakPoint(window.innerWidth);
    });
  }, []);

  return { breakPoint };
};
