import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
// import * as Containers from '../../../containers'
import dashboard_routes from '../../../routes/route_dashboard'
import { ToastContainer } from 'react-toastify'
import Header from '../../../containers/Header'
import Sidebar from '../../../containers/Sidebar'
import ModalWrapper from '../../../containers/Modal'

class Layout extends Component{
    render(){
        const { match } = this.props
        return (
            <div className="wrapper">
                <Sidebar />
                <Header />
                <main className="content">
                    <Switch>
                        {
                            dashboard_routes.map((item, key) => {
                                if(item.redirect) return <Redirect from={item.from} to={item.to} key={key} />
                                return (
                                    <Route path={`${match.path}/${item.path}`} component={item.component} exact={item.exact} key={key} />
                                )
                            })
                        }
                    </Switch>
                </main>
                <ModalWrapper />
                <ToastContainer autoClose={3000} pauseOnHover={false} hideProgressBar/>
            </div>
        )
    }
}

export default Layout