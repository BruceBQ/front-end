import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
// import Loading from '../components/Loading'
import Layout from '../pages/Layout/Layout'
import LoginPage from '../pages/Login'
import SecretRoute from '../components/SecretRoute'


export default (
	<Switch>
		<Route exact path="/" component= {LoginPage} />
		<SecretRoute path="/dashboard" component={Layout} />
	</Switch>
)
