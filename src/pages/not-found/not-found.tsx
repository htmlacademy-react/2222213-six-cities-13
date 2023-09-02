import React from 'react';
import styles from './not-found.module.css';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/headers/headers';


function NotFound(): React.JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities, not found</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <div className={`${styles.notFound}`}>
          <h1 className={`${styles.notFoundTitle}`}>404</h1>
          <Link className={`${styles.notFoundTitleLink}`} to="/">
            <span className="not-found-description" style={
              {
                fontSize: '20px',
                textTransform: 'uppercase'
              }
            }
            >
              Возвращайся на главную, ошибка при вводе адресной строки!!!
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
