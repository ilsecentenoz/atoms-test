import React, { Component } from "react"

export default class PlazoSelect extends Component {
  render() {
    return (
      <div>
        <h3>Plazo en meses</h3>
        <ul className="meses">
          <li>
            <a href="#!" id="oneYear" onClick={this.props.btnOnClick}>
              12
            </a>
          </li>
          <li>
            <a href="#!" id="twoYears" onClick={this.props.btnOnClick}>
              24
            </a>
          </li>
          <li>
            <a href="#!" id="threeYears" onClick={this.props.btnOnClick}>
              36
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
