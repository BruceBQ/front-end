import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Formik } from 'formik'
import * as yup from 'yup'
import LoginForm from './LoginForm'
import { logIn } from '../../actions/action_authetication'
import './login.scss'

const loginSchema = yup.object().shape({
  username: yup.string().required('Nhập tên đăng nhập !'),
  password: yup.string().required('Nhập mật khẩu !'),
})

const styles = theme => ({
  text: {
    fontSize: 16,
  },
})

class LoginPage extends Component {
  _onSubmit = values => {
    this.props.logIn(values)
  }

  render() {
    const { classes, isFetching } = this.props
    return (
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
                  <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={loginSchema}
                    validateOnChange={false}
                    onSubmit={values => this._onSubmit(values)}
                    render={props => <LoginForm {...props} isFetching={isFetching} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  isFetching: user.isFetching,
})

export default connect(
  mapStateToProps,
  { logIn: logIn },
)(withStyles(styles)(LoginPage))
