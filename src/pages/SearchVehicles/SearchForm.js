import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Formik, Field } from 'formik'
import DateFnsUtils from '@date-io/date-fns'
import {
  InlineDateTimePicker,
  InlineDatePicker,
  InlineTimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from 'material-ui-pickers'
import viLocale from 'date-fns/locale/vi'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import TextInput from '../../components/TextInput'

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
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  radio: {
    padding: 0,
    // marginRight: 0,
    // marginLeft: 0,
    marginBottom: 0,
  },
  formControlLabel: {
    marginLeft: 0
  }
})

class SearchForm extends Component {
  timeout = null

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
  submitForm = () => {
    this.props.handleSubmit()
  }
  _onTextInputChange = async event => {
    const TIMEOUTINPUT = 500
    event.persist()
    await this.props.handleChange(event)
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      this.submitForm()
    }, TIMEOUTINPUT)
  }
  _onDayChange = name => async date => {
    const { values } = this.props
    const old_day = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    )
    const new_day = new Date(
      values[name].getFullYear(),
      values[name].getMonth(),
      values[name].getDate(),
    )
    if (old_day.getTime() != new_day.getTime()) {
      await this.props.setFieldValue(name, date, true)
      this.props.handleSubmit()
    }
  }
  _onHourChange = name => async date => {
    const { values } = this.props
    const old_hour = new Date(values[name]).getTime()
    const new_hour = new Date(date).getTime()
    if (old_hour != new_hour) {
      await this.props.setFieldValue(name, date, true)
      this.props.handleSubmit()
    }
  }

  _onRadioChange = async (event) => {
    await this.props.handleChange(event)
    this.props.handleSubmit()
  }

  render() {
    const { classes, values, handleSubmit } = this.props

    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <TextInput
            name="q"
            fullWidth
            type="search"
            label="Nhập biển số phương tiện"
            onChange={this._onTextInputChange}
            disabled={values.filter === 'no_plate_number'}
          />
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={viLocale}>
          <div className="form-group">
            <InlineDatePicker
              label="Ngày bắt đầu"
              name="start_time"
              variant="outlined"
              format="dd/MM/yyyy"
              value={values.start_day}
              style={{
                marginRight: 5,
                width: 'calc(50% - 5px)',
              }}
              onChange={this._onDayChange('start_day')}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                },
              }}
              InputProps={{
                inputProps: {
                  className: classes.inputProps,
                },
              }}
              className={classes.textField}
            />
            <InlineTimePicker
              ampm={false}
              label="Giờ bắt đầu"
              variant="outlined"
              onChange={this._onHourChange('start_hour')}
              value={values.start_hour}
              style={{
                marginLeft: 5,
                width: 'calc(50% - 5px)',
              }}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                },
              }}
              InputProps={{
                inputProps: {
                  className: classes.inputProps,
                },
              }}
              className={classes.textField}
            />
          </div>
          <div className="form-group">
            <InlineDatePicker
              label="Ngày kết thúc"
              // fullWidth
              name="end_time"
              // ampm={false}
              variant="outlined"
              format="dd/MM/yyyy"
              value={values.end_day}
              onChange={this._onDayChange('end_day')}
              style={{
                marginRight: 5,
                width: 'calc(50% - 5px)',
              }}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                },
              }}
              InputProps={{
                inputProps: {
                  className: classes.inputProps,
                },
              }}
              className={classes.textField}
            />
            <InlineTimePicker
              // fullWidth
              label="Giờ kết thúc"
              ampm={false}
              variant="outlined"
              value={values.end_hour}
              onChange={this._onHourChange('end_hour')}
              style={{
                marginLeft: 5,
                width: 'calc(50% - 5px)',
              }}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                },
              }}
              InputProps={{
                inputProps: {
                  className: classes.inputProps,
                },
              }}
              className={classes.textField}
            />
          </div>
        </MuiPickersUtilsProvider>
        <div>
          <RadioGroup className={classes.radioGroup} value={values.filter} onChange={this._onRadioChange} name="filter">
            <FormControlLabel
              value="plate_number"
              control={<Radio className={classes.radio} color="primary"/>}
              label="Biển số"
              className={classes.formControlLabel}
            />
            <FormControlLabel
              value="no_plate_number"
              control={<Radio className={classes.radio} color="primary"/>}
              label="Phương tiện"
              className={classes.formControlLabel}
            />
          </RadioGroup>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(SearchForm)
