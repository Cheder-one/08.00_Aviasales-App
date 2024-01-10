import { useEffect, useRef } from 'react';

const usePrev = (value) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrev;
