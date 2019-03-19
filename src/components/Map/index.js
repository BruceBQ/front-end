import React, { Component } from 'react';


class GoogleMap extends Component{

    componentDidMount = () => {
        if(!window.google){
            let s = document.createElement('script')
            s.type = 'text/javascript'
            s.src = ''
        }
    }

    render(){
        return(
            <div styles={{width: '100%', height: '100%'}} id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}

export default GoogleMap