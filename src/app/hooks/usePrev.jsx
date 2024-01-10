import { useEffect, useRef } from 'react';

const usePrev = (value, init = null) => {
  const prev = useRef(init);
  useEffect(() => {
    prev.current = value;
  }, [value]);
  return prev;
};

export default usePrev;
