export function formatMoney(amount, currency, locale = 'en-US') {
    const numberFormatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    });
    return numberFormatter.format(amount);
  }
  