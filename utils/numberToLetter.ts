export const numToLetter = (num:number): string => {
  const division = Math.floor(num / 26);
  const remainder = Math.floor(num % 26);

  const currentCharacter = String.fromCharCode(remainder + 97).toUpperCase();

  return division - 1 >= 0 ? numToLetter(division-1) + currentCharacter:currentCharacter;
}
