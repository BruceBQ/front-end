import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Loading from '../../components/Loading'

import dashboard_routes from '../../routes/route_dashboard'
// import { ToastContainer } from 'react-toastify'
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
              <Route path={`${match.url}/sitemap`} component={SitemapPage} />
              <Route path={`${match.url}/follow_list`} component={FollowList} />
              <Route path={`${match.url}/manage_cam`} component={ManageCam} />
              <Route path={`${match.url}/search_vehicles`} component={SearchVehicles} />
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