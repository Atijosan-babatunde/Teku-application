export function truncateMiddle(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  const prefixLength = Math.floor((maxLength - 3) / 2);
  const suffixLength = Math.ceil((maxLength - 3) / 2);

  const truncatedStr =
    str.substring(0, prefixLength) + "..." + str.slice(-suffixLength);

  return truncatedStr;
}
