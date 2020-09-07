import React, { Component } from 'react';
import InputSalarioBruto from './components/InputSalarioBruto/InputSalarioBruto';
import InputApenasLeitura from './components/InputApenasLeitura/InputApenasLeitura';
import ProgressoBarraSalario from './components/ProgressoBarraSalario/ProgressoBarraSalario';
import { calculateSalaryFrom } from './helpers/salary.js';
import { formatNumber } from './helpers/formatHelper.js';
import css from './App.module.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salarioBruto: 1000,
      descontoRes: '',
    }
  }

  componentDidMount() {
    const { salarioBruto } = this.state;
    const descontoRes = calculateSalaryFrom(salarioBruto);
    this.setState({
      descontoRes,
    });
  }

  handleInputChange = (event) => {
    const descontoRes = calculateSalaryFrom(parseFloat(event.target.value));
    this.setState({
      salarioBruto: event.target.value,
      descontoRes,
    });
  }

  porcentual = (valor, barra) => {
    const { descontoRes } = this.state;
    if (barra) {
      return formatNumber(Math.trunc((valor * 100) / descontoRes.baseINSS));
    } else {
      return formatNumber((valor * 100) / descontoRes.baseINSS);
    }
  }

  render() {
    const { descontoRes, salarioBruto } = this.state;

    return (
      <div>
        <h1 className={css.centerHeader}>React Salário</h1>
        <InputSalarioBruto
          onInputSalario={this.handleInputChange}
          salarioBruto={salarioBruto}
        />
        <InputApenasLeitura
          descontoRes={descontoRes}
          porcentual={this.porcentual}
        />
        <ProgressoBarraSalario
          descontoRes={descontoRes}
          larguraBarra={this.porcentual}
        />
      </div>
    );
  }
}
