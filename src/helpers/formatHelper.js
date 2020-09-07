const formatter = Intl.NumberFormat('pt-BR', {maximumFractionDigits: 2});

function formatNumber(value) {
  return formatter.format(value);
}

export { formatNumber };