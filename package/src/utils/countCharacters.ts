/**
 * Counts characters in a string.
 *
 * @param {*} value The value.
 * @param {*} character The character.
 */
const countCharacters = (
  value: string,
  character: string,
) => (
  value.split(character).length - 1
);

export default countCharacters;
