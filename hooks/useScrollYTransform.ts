import { useEffect, useState } from 'react';

function useScrollYTransform() {
  const [translateYValue, setTranslateYValue] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setTranslateYValue(scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return translateYValue;
}

export default useScrollYTransform;
