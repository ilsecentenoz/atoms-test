import React, { Component } from "react"
import "../../styles/Range.scss"

export default class RangeMonto extends Component {
  render() {
    return (
      <input
        id="monto"
        type="range"
        value={this.props.value}
        min={this.props.min}
        max={this.props.max}
        onChange={this.props.onChange}
        step={this.props.step}
      />
    )
  }
}
