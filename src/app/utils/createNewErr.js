const createNewErr = (message, info) => {
  const error = new Error();
  error.message = `${info} \n${message}`;
  error.info = info;
  return error;
};

export default createNewErr;
