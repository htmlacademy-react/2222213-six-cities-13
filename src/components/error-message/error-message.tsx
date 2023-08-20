import React from 'react';
import { useAppSelector } from '../hooks';
import styles from './error-message.module.css';

function ErrorMessage(): React.JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ? <div className={styles.ErrorMessage}>{error}</div>
    : null;

}

export default ErrorMessage;

