import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'

import './login.scss'

const styles = theme => ({
    text: {
        fontSize: 16
    }
})
class LoginPage extends Component {
    render(){
        const { classes } = this.props
        return(
            <div className="login-page">
                <div className="content">
                    <div className="container pb-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-4 col-lg-4">
                                <div className="card border-0">
                                    <div className="card-header bg-transparent">
                                        <div className="text-center">
                                            <span className={classes.text}>ĐĂNG NHẬP!</span>
                                        </div>
                                    </div>
                                    <LoginForm />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(LoginPage)