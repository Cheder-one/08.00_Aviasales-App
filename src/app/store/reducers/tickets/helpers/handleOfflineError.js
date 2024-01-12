import { errorActions } from '../../errors';

const { setErrors } = errorActions;

const handleOfflineError = (dispatch) => {
  const info = 'Нет подключения к интернету';
  dispatch(setErrors({ status: '-1', info }));
  console.error(info);
};

export default handleOfflineError;
