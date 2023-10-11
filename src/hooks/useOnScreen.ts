import { useState, useEffect, RefObject } from 'react';

export const useOnScreen = (ref: RefObject<HTMLElement>): boolean => {
  let observer: any = null;

  const [isIntersecting, setIntersecting] = useState(false);

  if (typeof window !== 'undefined') {
    observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
  }

  useEffect(() => {
    observer.observe(ref.current as HTMLElement);
    return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
};
