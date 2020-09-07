// Fonte: https://www.todacarreira.com/calculo-salario-liquido/

const INSS_TABLE = [
  {
    id: 1,
    minValue: 0,
    maxValue: 1045,
    difference: 1045 - 0,
    discountPercentage: 0.075,
    discountValue: -1,
  },
  {
    id: 2,
    minValue: 1045.01,
    maxValue: 2089.6,
    difference: 2089.6 - 1045,
    discountPercentage: 0.09,
  },
  {
    id: 3,
    minValue: 2089.61,
    maxValue: 3134.4,
    difference: 3134.4 - 2089.6,
    discountPercentage: 0.12,
  },
  {
    id: 4,
    minValue: 3134.41,
    maxValue: 6101.06,
    difference: 6101.06 - 3134.4,
    discountPercentage: 0.14,
  },
];

function round(value) {
  return +value.toFixed(2);
}

function calculateDescontoINSS(baseINSS) {
  let descontoINSS = 0;

  if (baseINSS > 6101.07) {
    return 713.1;
  }

  for (var i = 0; i < INSS_TABLE.length; i++) {
    var currentItem = INSS_TABLE[i];
    let discountValue = 0;

    if (baseINSS > currentItem.maxValue) {
      // prettier-ignore
      discountValue = 
        round(currentItem.difference * currentItem.discountPercentage);

      descontoINSS += discountValue;
    } else {
      // prettier-ignore
      discountValue = 
        round((baseINSS - currentItem.minValue) * currentItem.discountPercentage);

      descontoINSS += discountValue;
      break;
    }
  }

  descontoINSS = round(descontoINSS);

  return descontoINSS;
}

function calculateDescontoIRPF(baseIRPF) {
  let descontoIRPF =
    baseIRPF < 1903.98
      ? 0
      : baseIRPF < 2826.65
      ? round(baseIRPF * 0.075) - 142.8
      : baseIRPF < 3751.05
      ? round(baseIRPF * 0.15) - 354.8
      : baseIRPF < 4664.68
      ? round(baseIRPF * 0.225) - 636.13
      : round(baseIRPF * 0.275) - 869.36;

  descontoIRPF = round(descontoIRPF);

  return descontoIRPF;
}

function calculateSalaryFrom(salarioBruto) {
  const baseINSS = +salarioBruto;
  const descontoINSS = calculateDescontoINSS(baseINSS);

  const baseIRPF = baseINSS - descontoINSS;
  const descontoIRPF = calculateDescontoIRPF(baseIRPF);

  const salarioLiq = baseINSS - descontoINSS - descontoIRPF;

  return {
    baseINSS,
    descontoINSS,
    baseIRPF,
    descontoIRPF,
    salarioLiq,
  };
}

export { calculateSalaryFrom };
