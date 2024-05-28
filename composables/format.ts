export const useCurrencyFormat = (currency = "COP") => {
    const currencyFormat = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    });
    return currencyFormat.format;
  };

  
export const formatCOP = useCurrencyFormat("COP");