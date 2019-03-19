import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
// import Loading from '../components/Loading'
import Layout from '../pages/Layout/Layout'
import LoginPage from '../pages/Login'


export default (
	<Switch>
		<Route exact path="/" component= {LoginPage} />
		<Route path="/dashboard" component={Layout} />
	</Switch>
)
