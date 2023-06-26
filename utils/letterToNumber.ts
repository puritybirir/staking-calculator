export const letterToNumber =(letters: string) => {
  letters.split("").reverse().map((letter, index) => {
    index === 0
      ? letter.toLowerCase().charCodeAt(0) - 97
      : letter.toLowerCase().charCodeAt(0) - 97 + 1
  })
  // Convert base 26 to 10
  .map((base26Number, position) => base26Number * 26 ** position)
  // Sum
  .reduce((sum:number, number:number) => sum + number, 0)
}
