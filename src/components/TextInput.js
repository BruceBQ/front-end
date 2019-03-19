import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
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
})

class TextInput extends Component {
  render() {
    const {
      classes,
      ...other
    } = this.props
    return ( 
      <TextField 
        {...other}
        fullWidth 
        margin = "none"
        variant = "outlined"
        InputLabelProps = {{
          classes: {
            root: classes.inputLabel
          },
        }}
        InputProps = {{
          inputProps: {
            className: classes.inputProps
          }
        }}
        className = { classes.textField }
      />
    )
  }
}

export default withStyles(styles)(TextInput)