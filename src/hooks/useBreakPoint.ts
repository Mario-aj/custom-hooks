import { useEffect, useState } from 'react';

export const useBreakPoint = (): { breakPoint: number } => {
  const [breakPoint, setBreakPoint] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBreakPoint(window.innerWidth);
    });
  }, []);

  return { breakPoint };
};
