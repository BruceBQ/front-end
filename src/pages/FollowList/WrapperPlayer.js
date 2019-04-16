import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
class WrapperPlayer extends Component {
  constructor(props) {
    super(props)
  }
  saveRef = elm => (this.wrapper = elm)

  render() {
    const { list_size } = this.props
    return (
      <div
        className={classnames('p-0', {
          'column-50': list_size === '4',
          'column-33': list_size === '9',
          'column-25': list_size === '16',
          'column-20': list_size === '25',
        })}
        ref={this.saveRef}
      >
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ followList }) => ({
  list_size: followList.list_size,
})

export default connect(mapStateToProps)(WrapperPlayer)
