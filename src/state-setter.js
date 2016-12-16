import React, {Component} from 'react'

class StateSetter extends Component {
  constructor(props, ...rest) {
    super(props, ...rest)
    this.state = props.initialState || {}
  }
  render() {
    return this.props.children(this.state, (...args) => this.setState(...args))
  }
}

export default StateSetter
