import React, { Component, Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import RightDrawer from '../../components/Drawer'
import SecretRoute from '../../components/SecretRoute'
import Loading from '../../components/Loading'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ModalWrapper from '../../components/Modal'
import { loadUserData } from '../../utils/localStorage'
import { startFollowList } from '../../actions/action_followList'
const SitemapPage = lazy(() => import('../Sitemap'))
const CameraDetail = lazy(() =>
  import('../../containers/Pages/Sitemap/CameraDetail'),
)
const FollowList = lazy(() => import('../FollowList'))
const ManageCam = lazy(() => import('../ManageCam'))
const SearchVehicles = lazy(() => import('../SearchVehicles'))

class Layout extends Component {
  componentDidMount() {
    const userData = loadUserData()
    if (
      userData !== undefined &&
      userData.id !== undefined &&
      userData.access_token !== undefined
    ) {
      this.props.startFollowList()
    }
  }

  render() {
    const { match } = this.props
    return (
      <div className="wrapper">
        <Sidebar />
        <Header />
        <main className="content">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Redirect from="/dashboard" to="/dashboard/sitemap" exact />
              {/* <SecretRoute path={`/`} component={SitemapPage} exact /> */}
              <SecretRoute
                path={`${match.url}/sitemap`}
                component={SitemapPage}
                exact={true}
              />
              <SecretRoute
                path={`${match.url}/follow_list`}
                component={FollowList}
              />
              <SecretRoute
                path={`${match.url}/manage_cam`}
                component={ManageCam}
              />
              <SecretRoute
                path={`${match.url}/search_vehicles`}
                component={SearchVehicles}
              />
            </Switch>
          </Suspense>
        </main>
        <ModalWrapper />
        <RightDrawer />
        {/* <ToastContainer autoClose={3000} pauseOnHover={false} hideProgressBar/> */}
      </div>
    )
  }
}

export default connect(
  null,
  { startFollowList },
)(Layout)
