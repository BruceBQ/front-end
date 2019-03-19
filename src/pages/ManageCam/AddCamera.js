import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { 
    TextField,
    Stepper,
    Step,
    StepContent,
    Button,
    Paper,
    Typography,
    StepLabel,
    StepButton
} from '@material-ui/core'
import className from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars';
import Connect from './Connect'
import Config from './Config'

const styles = theme => ({
    root: {
        padding: '5px 0 5px 10px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'

    },
    stepper: {
        
    },
    actionsContainer: {

    },
    button: {

    },
    remaining: {
        
        flexGrow: 1,
    }

})

function getSteps(){
    return ['Kết nối', 'Tham số', 'Chức năng']
}

class AddCamera extends Component{
    state = {
        activeStep: 0,
        
    }
    
    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1
        }))
    }
    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1
        }))
    }
    handleStep = (step) => {
        this.setState({
            activeStep: step
        })
        console.log(step)
    }
    render(){
        const { classes } = this.props
        const { activeStep } = this.state
        const steps = getSteps()
        return(
            <div className={classes.root}>
                <Stepper activeStep={activeStep} nonLinear>
                    {steps.map((label, index) => {
                        const props = {};
                        const buttonProps = {}
                        return (
                            <Step key={label} {...props}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
                <div className={classes.remaining}>
                        { activeStep === 0 && <Connect />}
                        { activeStep === 1 && <Config />}
                        { activeStep === 2 && <Config />}
                    {/* <Scrollbars style={{width: '100%', height: '100%'}}>
                    </Scrollbars> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({}) =>({

})

export default connect(mapStateToProps, {

})(withStyles(styles)(AddCamera))