import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { loadUserData } from '../utils/localStorage'
const user = loadUserData()
const SecretRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        (user !== undefined && user.access_token !== undefined) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default SecretRoute
