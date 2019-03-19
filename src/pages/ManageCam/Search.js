import React, { Component } from 'react';
import classNames from 'classnames';
import TextInput from '../../components/TextInput'
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Select from 'react-select';
import { Scrollbars } from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/core/styles';

import { 
    ProvinceControl, 
    DistrictControl,
    CommuneControl,
    CamStateControl
} from './SelectControl'

const suggestions = [
    {
        label: "Đà Nẵng",
        value: "Đà Nẵng"
    }
]

const state = [
    {
        label: 'Bình thường',
        value: '0'
    }
]
const styles = theme => ({
    root: {
        padding: '10px 10px',
        // flexGrow: '1',
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        fontSize: '0.875rem',
    },
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
});
const selectStyles = {
    menu: (styles) => {
        return {
            ...styles,
            zIndex: 2
        }
    }
}

class Search extends Component{
    render(){
        const { classes, theme } = this.props
        return(
            <div className={classes.root}>
                {/* <Scrollbars style={{width: '100%', height: '100%'}}> */}
                    <div className="form-group">
                        <TextInput
                            label="Nhập từ khóa tìm kiếm"
                            type="search"
                        />
                    </div>
                    <div className="form-group">
                        <Select 
                            classes={classes}
                            components={{
                                Control: ProvinceControl
                            }}
                            isClearable
                            options={suggestions}
                            placeholder={false}
                            styles={selectStyles}
                        />
                    </div>
                    <div className="form-group">
                        <Select 
                            classes={classes}
                            components={{
                                Control: DistrictControl
                            }}
                            isClearable
                            options={suggestions}
                            placeholder={false}
                            isMulti
                            styles={selectStyles}
                        />
                    </div>
                    <div className="form-group">
                        <Select 
                            classes={classes}
                            components={{
                                Control: CommuneControl
                            }}
                            isClearable
                            isMulti
                            options={suggestions}
                            placeholder={false}
                            styles={selectStyles}
                        />
                    </div>
                    <div className="form-group">
                        <Select 
                            classes={classes}
                            components={{
                                Control: CamStateControl
                            }}
                            isClearable
                            options={state}
                            placeholder={false}
                            styles={selectStyles}
                        />
                    </div>
                {/* </Scrollbars> */}
                
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Search)