const formatNum = (number, symbol) => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  });

  const formattedNumber = formatter.format(number);

  // prettier-ignore
  return symbol
    ? formattedNumber.replace('₽', symbol)
    : formattedNumber;
};

export default formatNum;
