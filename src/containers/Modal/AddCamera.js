import { connect } from 'react-redux'
import AddCamera from '../../components/Modal/AddCamera'
console.log(AddCamera)

const mapStateToProps = ({cameras}) => {
    return {
        isProcessing: cameras.isProcessing,
        errors: cameras.errors,
        configs: cameras.currentCamera.configs,
        provinces: cameras.currentCamera.provinces,
        districts: cameras.currentCamera.districts,
        communes: cameras.currentCamera.communes,
        // configs: cameras.checkCamera.data,
        // provinces: cameras.provinces,
        // districts: cameras.districts,
        // communes: cameras.communes,
        // activeStep: cameras.checkCamera.activeStep,
        activeStep: cameras.currentCamera.activeStep
    }
}

export default (connect(mapStateToProps)(AddCamera))