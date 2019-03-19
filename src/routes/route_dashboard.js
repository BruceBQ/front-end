// import SitemapPage from '../containers/Pages/Sitemap'
import React from 'react'
const SitemapPage = React.lazy(() => import('../pages/Sitemap'))
// import SitemapPage from '../pages/Sitemap'
const CameraDetail = React.lazy(() => import('../containers/Pages/Sitemap/CameraDetail'))
// import CameraDetail from '../containers/Pages/Sitemap/CameraDetail'
const FollowList = React.lazy(() => import('../pages/FollowList'))
// import FollowList from '../pages/FollowList'
const ManageCam = React.lazy(() =>import('../pages/ManageCam'))
// import ManageCam from '../pages/ManageCam'

const dashboard_routes = [
    { path: 'camera', name: 'Sitemap', component: {SitemapPage}, exact: true},
    { path: 'camera/:id', name: 'Camera', component: {CameraDetail},},
    { path: 'follow_list', name: 'Follow List', component: {FollowList}, exact: true},
    { path: 'manage_cam', name: 'Manage Camera', component: {ManageCam}, exact: false},
    { redirect: true, from: '/dashboard', to: '/dashboard/camera', name: 'Dashboard'},
]

export default dashboard_routes