import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import { signIn } from '../../actions/action_authetication'
import _ from 'lodash'

const styles = theme => ({
  inputProps: {
    fontSize: '0.875rem',
    padding: '12px 14px',
  },
  inputLabel: {
    fontSize: '0.875rem',
    transform: 'translate(19px, 14px) scale(1)',
  },
  input: {
    display: 'flex',
    fontSize: '0.875rem',
    padding: '2.5px 14px',
  },
})

class LoginForm extends Component{
  state = {
    username: '',
    password: ''
  }

  onChange = name => event =>{
    this.setState({
      [name]: event.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(signIn(this.state))
  }

  render(){
    const { fetching, errors, classes } = this.props
    return(
      <form autoComplete="off">
        <div className="card-body">
          <div className="form-group">
            <TextField
              label="Tên đăng nhập"
              name="username"
              margin="normal"
              error={!_.isEmpty(errors.username)}
              InputLabelProps	={{
                classes: {
                  root: classes.inputLabel
                },
              }}
              InputProps={{
                inputProps: {
                  className: classes.inputProps
                }
              }}
              fullWidth
              helperText={errors.username}
              variant="outlined"
              onChange={this.onChange('username')}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Mật khẩu"
              name="password"
              type="password"
              fullWidth
              margin="none"
              error={!_.isEmpty(errors.password)}
              InputLabelProps	={{
                classes: {
                  root: classes.inputLabel
                },
              }}
              InputProps={{
                inputProps: {
                  className: classes.inputProps
                }
              }}
              helperText={errors.password}
              variant="outlined"
              onChange={this.onChange('password')}
            />
          </div>
          <div className="text-center">
            <Button
              variant="contained" 
              color="primary"
              onClick={this.onSubmit}
              disabled={fetching}
            >
                Đăng nhập
            </Button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({user}) => ({
  errors: user.errors,
  fetching: user.fetching
})

export default connect(mapStateToProps)(withStyles(styles)(LoginForm))