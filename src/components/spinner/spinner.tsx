import React from 'react';
import styles from './spinner.module.css';

function Spinner(): React.JSX.Element {

  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
      </div>
    </div>
  );
}

export default Spinner;
