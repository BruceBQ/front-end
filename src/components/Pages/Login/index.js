import React, { Component } from 'react';
import LoginForm from '../../../containers/Pages/Login/LoginForm'
import './login.scss'

class LoginPage extends Component {
    render(){
        return(
            <div className="login-page">
                <div className="content">
                    <div className="container pb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="card border-0">
                                    <div className="card-header bg-transparent">
                                        <div className="text-center">
                                            <span>Welcome!</span>
                                        </div>
                                    </div>
                                    <LoginForm />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <footer>

                </footer>
            </div>
        )
    }
}
export default LoginPage