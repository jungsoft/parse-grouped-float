import parseFloatGroup from './parseFloatGroup';
import countCharacters from './countCharacters';

/**
 * Parses a potentially grouped float, containing both commas and dots.
 *
 * Handles last groups up to {detectDecimalCases} decimal cases,
 * for example, {detectDecimalCases = 3} would detect 11,000.123.
 *
 * Handles potentially decimal numbers, converting them to float.
 *
 * "11,11" => 11.11
 * "11.11" => 11.11
 * "11,000" => 11000
 * "11,000.1" => 11000.1
 * "11,000.12" => 11000.12
 * "11,000.123" => 11000.123
 * "11,000.1234" => 11000.1234
 * "11,000.12345" => 11000.12345
 * "42.01690672268907563025210084" -> 42.01690672268908
 *
 * @param {*} value String value.
 * @param {*} fallback Fallback value.
 * @param {*} fallback Decimal cases to detect in grouped floats. Defaults to 2.
 */
const parseGroupedFloat = (
  value: string | number,
  fallback: number = NaN,
  detectDecimalCases: number = 2,
) => {
  const originalValue = String(value).trim();

  const commasCount = countCharacters(originalValue, ',');
  const dotsCount = countCharacters(originalValue, '.');

  let stringValue = originalValue;

  // Handle decimal numbers, such as 42.001 or 42,001
  const isDecimalNumber = (
    (commasCount === 0 && dotsCount === 1)
    || (commasCount === 1 && dotsCount === 0)
  );

  if (!isDecimalNumber) {
    // Handle simple groups, such as 11.34
    stringValue = originalValue.replace(/[^0-9]/g, '');

    // Handle comma + decimal groups, such as 11,000.34
    if (detectDecimalCases > 0) {
      for (let decimalCases = 1; decimalCases <= detectDecimalCases; decimalCases += 1) {
        stringValue = parseFloatGroup(originalValue, stringValue, decimalCases);
      }
    }
  }

  const floatValue = parseFloat(stringValue);

  if (isNaN(floatValue)) {
    return fallback;
  }

  return floatValue;
};

export default parseGroupedFloat;
