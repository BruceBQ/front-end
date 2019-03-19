import React, { Component } from 'react';
import TextInput from '../../TextInput'
import { signIn } from '../../../actions/action_authetication'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faLock, faUser  } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'
// import './login-form.scss'

class LoginForm extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            remember: '',
        }
        this.textInput = React.createRef()
        this.onChange = this.onChange.bind(this)
        this.focusInputGroup = this.focusInputGroup.bind(this)
        this.blurInputGroup = this.blurInputGroup.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    focusInputGroup(e){
        e.target.parentElement.classList.add('input-focused')
    }

    blurInputGroup(e){
        e.target.parentElement.classList.remove('input-focused')
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onSubmit(e){
        e.preventDefault()
        this.props.dispatch(signIn(this.state))
    }

    render(){
        const { fetching, errors } = this.props
        return(
            <form autoComplete="off">
                <div className="card-body">
                    <div className="form-group">
                        <label className="control-label">Tên đăng nhập</label>
                        <TextInput name="username" error={errors.username} placeholder="Tên đăng nhập" type="text" onChange={this.onChange} value={this.state.username} onFocus={this.focusInputGroup} onBlur={this.blurInputGroup}/>
                        {/* <div className={`input-group ${errors.username ? 'input-error' : ''}`}>
                            <div className="input-group-prepend">       
                                <span className="input-group-text"><FontAwesomeIcon icon={faUser}/></span>
                            </div>
                            <TextInput name="username" error={errors.username} placeholder="Tên đăng nhập" type="text" onChange={this.onChange} value={this.state.username} onFocus={this.focusInputGroup} onBlur={this.blurInputGroup}/>
                        </div> */}
                    </div>
                    <div className="form-group">
                        <label className="control-label">Mật khẩu</label>
                        <TextInput name="password" error={errors.password} placeholder="Mật khẩu" type="password" onChange={this.onChange} value={this.state.password} onFocus={this.focusInputGroup} onBlur={this.blurInputGroup}/>
                        {/* <div className={ `input-group ${errors.password ? 'input-error' : ''}`}>
                            <div className="input-group-prepend">       
                                <span className="input-group-text"><FontAwesomeIcon icon={faLock}/></span>
                            </div>
                            <TextInput name="password" error={errors.password} placeholder="Mật khẩu" type="password" onChange={this.onChange} value={this.state.password} onFocus={this.focusInputGroup} onBlur={this.blurInputGroup}/>
                        </div> */}
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary my-2 btn-signin" width="120" onClick={this.onSubmit} disabled =  {fetching ? true : false} >
                            { fetching ? <FontAwesomeIcon icon={faCircleNotch} spin /> : 'Đăng nhập'}
                        </button>
                    </div>
                    <div className="text-center invalid-feedback">{errors.authenticated}</div>
                </div>
            </form>
        )
    }
}

export default LoginForm