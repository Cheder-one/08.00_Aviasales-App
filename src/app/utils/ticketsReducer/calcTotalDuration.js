const calcTotalDuration = (segments) => {
  return segments.reduce((acc, el) => acc + el.duration, 0);
};

export default calcTotalDuration;
