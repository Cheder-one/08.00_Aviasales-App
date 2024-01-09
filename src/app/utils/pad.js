const pad = (variable, num = 2) => {
  return variable.toString().padStart(num, '0');
};

export default pad;
