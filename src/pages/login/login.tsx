import React, { FormEvent, useRef, useState } from 'react';
import {Helmet} from 'react-helmet-async';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { loginAction } from '../../store/api-actions/authorization-api';
import { AppRoute, AuthorizationStatus, City} from '../../const';
import loginStyles from './login-page.module.css';

function LoginPage(): React.JSX.Element {
  // const currentCity = useAppSelector((state) => state.currentCity);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])\S*$/i;
  const regexLogin = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  const [isCorrectLogin, setIsCorrectLogin] = useState(true);
  const [isCorrectPassword, setIsCorrectPassword] = useState(true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsCorrectLogin(true);
    setIsCorrectPassword(true);

    if ((loginRef.current !== null && loginRef.current.value.length) &&
      (passwordRef.current !== null && passwordRef.current.value.length)) {

      if (loginRef.current && passwordRef.current) {
        if (!regexPassword.test(passwordRef.current.value)) {
          setIsCorrectPassword(false);
          return;
        }

        if (!regexLogin.test(loginRef.current.value)) {
          setIsCorrectLogin(false);
          return;
        }
      }

      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));

      if(isAuth) {
        navigate(AppRoute.Main);
      }
    }
  };

  const citiesList = Object.values(City).map((city) => city);
  const randomIndex = Math.floor(Math.random() * (citiesList.length - 1));
  const randomCity = citiesList[randomIndex];

  if(isAuth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities, login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  defaultValue=''
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={loginRef}
                  required
                  data-testid='loginElement'
                />
                {!isCorrectLogin && <p className={loginStyles.login__error}>Enter a valid email</p>}
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  defaultValue=''
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                  data-testid='passwordElement'
                />
                {!isCorrectPassword &&
                  <p className={loginStyles.password__error}>
                    At least 1 letter and 1 number without spaces
                  </p>}
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{randomCity}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;


