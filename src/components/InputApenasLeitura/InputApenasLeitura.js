import React, { Component } from 'react';
import css from './InputApenasLeitura.module.css';

export default class InputApenasLeitura extends Component {
  render() {
    const { descontoRes, porcentual } = this.props;

    return (
      <div className="row">
        <div className="col s2 input-field">
          <input
            type="text"
            className={css.boldFont}
            value={'R$' + descontoRes.baseINSS}
            readOnly
            disabled
          />
          <label className="active">Base INSS</label>
        </div>
        <div className="col s2 input-field">
          <input
            type="text"
            className={`${css.boldFont} ${css.inssDesconto}`}
            value={
              'R$' +
              descontoRes.descontoINSS +
              '(' +
              porcentual(descontoRes.descontoINSS, false) +
              '%)'
            }
            readOnly
            disabled
          />
          <label className="active">Desconto INSS</label>
        </div>
        <div className="col s2 input-field">
          <input
            type="text"
            className={css.boldFont}
            value={'R$' + descontoRes.baseIRPF}
            readOnly
            disabled
          />
          <label className="active">Base IRPF</label>
        </div>
        <div className="col s2 input-field">
          <input
            type="text"
            className={`${css.boldFont} ${css.irpfDesconto}`}
            value={
              'R$' +
              descontoRes.descontoIRPF +
              '(' +
              porcentual(descontoRes.descontoIRPF, false) +
              '%)'
            }
            readOnly
            disabled
          />
          <label className="active">Desconto IRPF</label>
        </div>
        <div className="col s4 input-field">
          <input
            type="text"
            className={`${css.boldFont} ${css.salarioLiq}`}
            value={
              'R$' +
              descontoRes.salarioLiq +
              '(' +
              porcentual(descontoRes.salarioLiq, false) +
              '%)'
            }
            readOnly
            disabled
          />
          <label className="active">Salário Liquido</label>
        </div>
      </div>
    );
  }
}
