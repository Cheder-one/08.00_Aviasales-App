import { errorActions } from '../../errors';

const { setErrors } = errorActions;

const handleError = (dispatch, error) => {
  const info = 'Ошибка при получении билетов';
  dispatch(setErrors({ message: error.message, info }));

  throw new Error([error.message, info].join(' | '));
};

export default handleError;
