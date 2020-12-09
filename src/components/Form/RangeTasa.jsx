import React, { Component } from "react"
import "../../styles/Range.scss"
export default class RangeTasa extends Component {
  render() {
    return (
      <input
        id="tasa"
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
