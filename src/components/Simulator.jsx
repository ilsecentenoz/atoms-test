import React, { Component } from "react"
//Styles
import "../styles/index.scss"
import "react-input-range/lib/css/index.css"
//components
import RangeMonto from "./Form/RangeMonto.jsx"
import RangeTasa from "./Form/RangeTasa.jsx"
import PlazoSelect from "./Form/PlazoSelect.jsx"
import Resultados from "./Form/Resultados.jsx"

export default class Simulator extends Component {
  constructor(props) {
    super(props)
    let monto = this.props.valueM
    let tasa = this.props.valueT
    let porcentaje = ((monto / 12) * tasa) / 100
    let pagoMensual = monto / 12 + porcentaje
    let comision = 348
    let cat = 15.17
    let montoNeto = monto - comision
    let pagoTotal = (monto * tasa) / 100 + monto

    console.log(monto)
    console.log(tasa)
    console.log(porcentaje)
    console.log(pagoMensual)
    console.log(pagoTotal)
    console.log(montoNeto)

    this.state = {
      valueMonto: this.props.valueM,
      stepMonto: this.props.stepM,
      maxMonto: this.props.maxM,
      minMonto: this.props.minM,

      mensualidad: this.props.pagoMensual,

      valueTasa: this.props.valueT,
      stepTasa: this.props.stepT,
      maxTasa: this.props.maxT,
      minTasa: this.props.minT,

      plazo: this.props.plazo,
      comisionAnual: cat,

      mensualidad: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(pagoMensual),

      comisionApertura: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(comision),

      montoRecibido: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(montoNeto),

      total: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(pagoTotal),
    }
  }

  update(e) {
    let changedID = e.target.id
    let value = e.target.value
    if (changedID === "monto") {
      this.setState({ valueMonto: e.target.value })
      console.log(e.target.id, e.target.value)
    }
    if (changedID === "tasa") {
      this.setState({ valueTasa: e.target.value })
      console.log(e.target.id, e.target.value)
    }

    switch (changedID) {
      case "oneYear":
        this.setState({ plazo: this.props.plazo1 })
        console.log(e.target.id, this.props.plazo1)
        break

      case "twoYears":
        this.setState({ plazo: this.props.plazo2 })
        console.log("dosaños", this.props.plazo2)
        break

      case "threeYears":
        this.setState({ plazo: this.props.plazo3 })
        console.log(e.target.id, this.props.plazo3)

        break

      default:
        break
    }
    this.calculate(changedID, value)
  }

  calculate(id, value) {
    let monto, tasa, meses, mensual, porcentajeTasa
    let comision = 348
    if (id === "tasa") {
      tasa = parseFloat(value)
      monto = parseFloat(this.state.valueMonto)
    } else if (id === "monto") {
      monto = parseFloat(value)
      tasa = parseFloat(this.state.valueTasa)
    } else {
      monto = parseFloat(this.state.valueMonto)
      tasa = parseFloat(this.state.valueTasa)

      switch (id) {
        case "oneYear":
          meses = this.props.plazo1
          porcentajeTasa = monto / meses
          mensual = (porcentajeTasa * tasa) / 100
          console.log(porcentajeTasa)
          console.log(mensual)

          break

        case "twoYears":
          meses = this.props.plazo2
          porcentajeTasa = monto / meses
          mensual = (porcentajeTasa * tasa) / 100
          console.log(porcentajeTasa)
          console.log(mensual)

          break

        case "threeYears":
          meses = this.props.plazo3
          porcentajeTasa = monto / meses
          mensual = (porcentajeTasa * tasa) / 100
          console.log(porcentajeTasa)
          console.log(mensual)

          break

        default:
          break
      }
      let pagoMensual = mensual + porcentajeTasa
      let pagoTotal = (monto * tasa) / 100 + monto
      let montoNeto = monto - comision

      pagoMensual = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(pagoMensual)

      pagoTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(pagoTotal)

      montoNeto = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(montoNeto)

      this.setState({ mensualidad: pagoMensual })
      this.setState({ total: pagoTotal })
      this.setState({ montoRecibido: montoNeto })
    }
  }

  render() {
    return (
      <>
        <div className="shadowContent">
          <div className="content">
            <h2>Simulador de Crédito</h2>
            <form action="">
              <div className="rangeContainer">
                <div className="range">
                  <p>Monto deseado: {this.state.valueMonto}</p>
                  <RangeMonto
                    value={this.state.valueMonto}
                    min={this.state.minMonto}
                    max={this.state.maxMonto}
                    onChange={this.update.bind(this)}
                    step={this.state.stepMonto}
                    currancy={this.props.currancy}
                  />
                </div>
                <div className="range">
                  <p>Tasa Anual: {this.state.valueTasa}%</p>
                  <RangeTasa
                    value={this.state.valueTasa}
                    min={this.state.minTasa}
                    max={this.state.maxTasa}
                    onChange={this.update.bind(this)}
                    step={this.state.stepTasa}
                  />
                </div>
              </div>

              <div className="plazo">
                <PlazoSelect btnOnClick={this.update.bind(this)} />
              </div>

              <Resultados
                mensualidad={this.state.mensualidad}
                comisionApertura={this.state.comisionApertura}
                montoRecibido={this.state.montoRecibido}
                total={this.state.total}
                comisionAnual={this.state.comisionAnual}
              />

              <button>Solicitar mi crédito</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

Simulator.defaultProps = {
  comision: 348,

  valueM: 10000,
  stepM: 1000,
  maxM: 1000000,
  minM: 10000,

  valueT: 5.68,
  stepT: 5.68,
  maxT: 249.84,
  minT: 5.68,

  plazo1: 12,
  plazo2: 24,
  plazo3: 36,

  currancy: "$",
}
