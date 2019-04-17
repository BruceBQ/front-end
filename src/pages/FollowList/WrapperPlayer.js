import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
class WrapperPlayer extends Component {
  constructor(props) {
    super(props)
  }
  saveRef = elm => (this.wrapper = elm)

  render() {
    const { listSize } = this.props
    return (
      <div
        className={classnames('p-0', {
          'column-50': listSize === 4,
          'column-33': listSize === 9,
          'column-25': listSize === 16,
          'column-20': listSize === 25,
        })}
        ref={this.saveRef}
      >
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ followList }) => ({
  listSize: followList.listSize,
})

export default connect(mapStateToProps)(WrapperPlayer)
