import React, { Component } from "react"

export default class Resultados extends Component {
  render() {
    return (
      <div className="outputs">
        <div>
          <p>Pago mensual</p>
          <span>{this.props.mensualidad}</span>
        </div>
        <div>
          <p>Comisión por apertura</p>
          <span>{this.props.comisionApertura}</span>
        </div>
        <div>
          <p>Monto neto Depositado</p>
          <span>{this.props.montoRecibido}</span>
        </div>
        <div>
          <p>Total pagado</p>
          <span>{this.props.total}</span>
        </div>
        <div>
          <p>CAT</p>
          <span>{this.props.comisionAnual}%</span>
        </div>
      </div>
    )
  }
}
