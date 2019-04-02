import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { isEmpty } from 'lodash'

export function NoOptionsMessage(props){
  return (
    <Typography
      color="textSecondary"
      style={{
        textAlign: 'center',
        padding: '8px 12px'
      }}
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      Không có lựa chọn
    </Typography>
  )
}


function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

export function ProvinceControl(props){
  const value = props.getValue()
  return (
    <TextField 
      variant="outlined"
      fullWidth
      value={isEmpty(value) ? '' : 'have value'}
      label="Tỉnh/Thành phố"
      error={props.selectProps.error}
      helperText={props.selectProps.helperText}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      InputLabelProps={{
        classes: {
          root: props.selectProps.classes.inputLabel
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  ) 
}

export function DistrictControl(props){
  const value = props.getValue()
  return (
    <TextField 
      variant="outlined"
      fullWidth
      value={isEmpty(value) ? '' : 'have value'}
      label="Quận/Huyện"
      error={props.selectProps.error}
      helperText={props.selectProps.helperText}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      InputLabelProps={{
        classes: {
          root: props.selectProps.classes.inputLabel
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  ) 
}

export function CommuneControl(props){
  const value = props.getValue()
  return (
    <TextField 
      variant="outlined"
      fullWidth
      value={isEmpty(value) ? '' : 'have value'}
      label="Phường/Xã"
      error={props.selectProps.error}
      helperText={props.selectProps.helperText}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      InputLabelProps={{
        classes: {
          root: props.selectProps.classes.inputLabel
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  ) 
}

export function CamStateControl(props){
  const value = props.getValue()
  return (
    <TextField 
      variant="outlined"
      fullWidth
      value={isEmpty(value) ? '' : 'have value'}
      label="Trạng thái"
      error={props.selectProps.error}
      helperText={props.selectProps.helperText}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      InputLabelProps={{
        classes: {
          root: props.selectProps.classes.inputLabel
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  ) 
}

export function CamModesControl(props){
  const value = props.getValue()
  return (
    <TextField 
      variant="outlined"
      fullWidth
      value={isEmpty(value) ? '' : 'have value'}
      label="Chức năng"
      error={props.selectProps.error}
      helperText={props.selectProps.helperText}
      InputProps={{
          inputComponent,
          inputProps: {
              className: props.selectProps.classes.input,
              inputRef: props.innerRef,
              children: props.children,
              ...props.innerProps,
          },
      }}
      InputLabelProps={{
          classes: {
              root: props.selectProps.classes.inputLabel
          }
      }}
      {...props.selectProps.textFieldProps}
    />
  ) 
}

export function CamResolutionControl(props){
  const value = props.getValue()
  return (
    <TextField 
      variant="outlined"
      fullWidth
      value={isEmpty(value) ? '' : 'have value'}
      label="Độ phân giải"
      error={props.selectProps.error}
      helperText={props.selectProps.helperText}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      InputLabelProps={{
        classes: {
          root: props.selectProps.classes.inputLabel
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  ) 
}

export function GroupControl(props) {
  const value = props.getValue()
  return (
    <TextField
      variant="outlined"
      fullWidth
      value={isEmpty(value) ? '' : 'have value'}
      label="Chọn/Tạo nhóm"
      error={props.selectProps.error}
      helperText={props.selectProps.helperText}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      InputLabelProps={{
        classes: {
          root: props.selectProps.classes.inputLabel
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  )
}

export function QualityControl(props){
  const value = props.getValue()
  return (
    <TextField
      variant="outlined"
      fullWidth
      value={isEmpty(value) ? '' : 'have value'}
      label="Chất lượng"
      error={props.selectProps.error}
      helperText={props.selectProps.helperText}
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      InputLabelProps={{
        classes: {
          root: props.selectProps.classes.inputLabel
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  )
}