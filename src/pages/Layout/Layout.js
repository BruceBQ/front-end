import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import SecretRoute from '../../components/SecretRoute'
import Loading from '../../components/Loading'

import dashboard_routes from '../../routes/route_dashboard'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ModalWrapper from '../../components/Modal'

const SitemapPage = lazy(() => import('../Sitemap'))
const CameraDetail = lazy(() => import('../../containers/Pages/Sitemap/CameraDetail'))
const FollowList = lazy(() => import('../FollowList'))
const ManageCam = lazy(() =>import('../ManageCam'))
const SearchVehicles = lazy(() => import('../SearchVehicles'))

class Layout extends Component{
  render(){
    const { match } = this.props
    return (
      <div className="wrapper">
        <Sidebar />
        <Header />
        <main className="content">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Redirect from="/dashboard" to="/dashboard/sitemap" exact={true}/>
              <SecretRoute path={`${match.url}/sitemap`} component={SitemapPage} />
              <SecretRoute path={`${match.url}/follow_list`} component={FollowList} />
              <SecretRoute path={`${match.url}/manage_cam`} component={ManageCam} />
              <SecretRoute path={`${match.url}/search_vehicles`} component={SearchVehicles} />
            </Switch>
          </Suspense>
        </main>
        <ModalWrapper />
        {/* <ToastContainer autoClose={3000} pauseOnHover={false} hideProgressBar/> */}
      </div>
    )
  }
}

export default Layout