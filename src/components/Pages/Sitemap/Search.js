import React, { Component, Fragment } from 'react';
import TextInput from '../../TextInput'
import Select from 'react-select'
import { connect } from "react-redux";
import { 
    getProvincesAvailable,
    getDistrictsAvailable
} from '../../../actions/action_camera'
import _ from 'lodash'
import Button from '@material-ui/core/Button'
import filter_disable from '../../../assets/icon/icons8-clear-filters-26.png'


const selectStyles = {
    control: (styles) => ({
        ...styles,
        // width: '600px',
        // border: '1px solid #2874A6',
        // boxShadow: '0 0 0 1px #0770cd',
        fontSize: '14px'
    }),
    option: (provided, state) => ({
        ...provided,
        // border: '1px solid #2874A6',
        fontSize: '14px'
    })
}

class Search extends Component{
    componentDidMount(){
        this.props.getProvincesAvailable()
    }

    

    render(){
        const provinces = this.props.provinces.map( province => {
            return { value: province.province_code, label: province.name }
        })
        const districts = this.props.districts.map( district => {
            return { value: district.district_code, label: district.name}
        })
        const communes = this.props.communes.map( commune => {
            return { value: commune.commune_code, label: commune.name }
        })
        return(
            <SearchForm 
                getDistrictsAvailable={this.props.getDistrictsAvailable}
                provinces={provinces}
                districts={districts}
                communes={communes}
            />
        )
    }
}

class SearchForm extends Component{
    state = {
        ip: null
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onProvinceChange = province => {
        if(province && province !== null && province !== 'undefined'){
            this.setState({ 
                province: province,
                district: '',
                commune: '',
            })
            this.props.getDistrictsAvailable(province.value)
        }
    }
    
    onDistrictChange = district => {
        if(district && district !== null && district !== 'undefined'){
            this.setState({
                district: district
            })
        }
    }

    render(){
        const { provinces, districts, communes } = this.props
        // console.log(this.state)
        return(
            <div className="search-camera">
                <div className="search-camera-header">
                    <h6>TÌM KIẾM</h6>
                    {/* <Button variant="contained">Tất cả</Button> */}
                    {/* <button className="clear-filter">Tất cả</button> */}
                    <button className=" btn clear-filter" title="Xóa bộ lọc">
                        <img src={filter_disable} />
                    </button>
                </div>
                <form>
                    <div className="form-group">
                        <TextInput name="search_input" type="text" placeholder="Nhập tên camera, địa chỉ IP" onChange={this.onChange} value={this.state.search_input} />
                    </div>
                    <div className="form-group">
                        <Select name="district" styles={selectStyles} placeholder="Chọn Quận/Huyện"/>
                    </div>
                    <div className="form-group">
                        <Select name="commune" styles={selectStyles} placeholder="Chọn Phường/Xã"/>
                    </div>
                    <div className="form-group">
                        <Select name="group" styles={selectStyles} placeholder="Chọn Nhóm"/>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = ({cameras}) => {
    return {
        provinces: cameras.search.provinces,
        districts: cameras.search.districts,
        communes: cameras.search.communes
    }
}


export default connect(mapStateToProps, {
    getProvincesAvailable,
    getDistrictsAvailable
})(Search)