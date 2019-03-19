import React, { Component } from 'react';
import { Input } from 'reactstrap'

class TextInput extends Component{
    render(){
        const { 
            placeholder,
            name, 
            error, 
            onChange, 
            type, 
            onBlur, 
            onFocus, 
            value, 
            defaultValue,
            disabled } = this.props
        return(
            <React.Fragment>
                <Input 
                    className={`${error ? 'is-invalid' : ''}`} 
                    type={type||'text'} 
                    name={name} 
                    disabled={disabled} 
                    onChange={onChange} 
                    placeholder={placeholder} 
                    onBlur={onBlur} 
                    onFocus={onFocus} 
                    value={value || ''}
                    defaultValue={defaultValue}/>
                { error ? <div className="text-left invalid-feedback">{error}</div> : null }
            </React.Fragment>
        )
    }
    
}

export default TextInput