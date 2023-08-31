import React from 'react';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: boolean;
  children: React.JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): React.JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;

