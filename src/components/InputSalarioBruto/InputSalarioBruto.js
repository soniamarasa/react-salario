import React, { Component } from 'react';
import css from './InputSalarioBruto.module.css'

export default class InputSalarioBruto extends Component {
  render() {
    const { onInputSalario, salarioBruto } = this.props;
    return (
      <div className={css.padding}>
        <div className="input-field">
          <input
            placeholder="Informe o salário"
            id="salario_bruto"
            type="number"
            value={salarioBruto}
            className="validate"
            step="100"
            min="1000"
            onChange={onInputSalario}
          />
          <label className="active" htmlFor="salario_bruto">
            Salário Bruto
          </label>
        </div>
      </div>
    );
  }
}
