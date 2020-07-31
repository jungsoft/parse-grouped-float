/**
 * Parses a float group, considering the amount of decimal cases.
 *
 * E.g.:
 * (decimalCases = 1): 11,000.3 => 11000.3
 * (decimalCases = 2): 11,000.34 => 11000.34
 * (decimalCases = 3): 11,000.345 => 11000.345
 *
 * @param {*} originalValue The original string value.
 * @param {*} value The modified string value.
 * @param {*} decimalCases The amount of decimal cases to consider.
 */
const parseFloatGroup = (
  originalValue: string,
  value: string,
  decimalCases: number,
) => {
  const testRegExp = new RegExp(`[,.]\\d{${decimalCases}}$`);

  if (testRegExp.test(originalValue)) {
    const replaceRegExp = new RegExp(`(\\d{${decimalCases}})$`);

    return value.replace(replaceRegExp, '.$1');
  }

  return value;
};

export default parseFloatGroup;
