import React, { Component } from 'react';
import css from './ProgressoBarraSalario.module.css';

export default class ProgressoBarraSalario extends Component {
  render() {
    const { descontoRes, larguraBarra } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          className={[css.inssCor, css.barAltura].join(' ')}
          style={{ width: larguraBarra(descontoRes.descontoINSS, true) + '%' }}
        ></div>

        <div
          className={[css.irpfCor, css.barAltura].join(' ')}
          style={{ width: larguraBarra(descontoRes.descontoIRPF, true) + '%' }}
        ></div>

        <div
          className={[css.salarioLiqCor, css.barAltura].join(' ')}
          style={{ width: larguraBarra(descontoRes.salarioLiq, true) + '%' }}
        ></div>
      </div>
    );
  }
}
