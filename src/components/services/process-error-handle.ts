import { store } from '../../store';
import { setError } from '../../store/action';
import { clearErrorAction } from '../../store/api-actions/error-api';

export const handleProcessError = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
