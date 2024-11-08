export class FormatPhoneNumber {
  static format(rawInput: string) {
    const input = `${FormatPhoneNumber.getRaw(rawInput)}`
    if (input.length <= 2) {
      return `(${input})`
    }

    if (input.length <= 6) {
      const ddd = `(${input[0]}${input[1]})`
      return `${ddd} ${input.slice(2, input.length)}`
    }

    const ddd = `(${input[0]}${input[1]})`

    const getSections = (input: string) => {
      const ssFirstNum = input[6] ?? ''
      const ssSecondNum = input[7] ?? ''
      const ssThirdNum = input[8] ?? ''
      const ssFourthNum = input[9] ?? ''
      const ssFithNum = input[10] ?? ''

      const fsFull = !ssFithNum
        ? `${input.slice(2, 6)}`
        : `${input.slice(2, 7)}`

      return ssFithNum
        ? `${fsFull}-${ssSecondNum}${ssThirdNum}${ssFourthNum}${ssFithNum}`
        : `${fsFull}-${ssFirstNum}${ssSecondNum}${ssThirdNum}${ssFourthNum}`
    }

    return `${ddd} ${getSections(input)}`
  }

  static getRaw(input: string) {
    const newInput = input
      .replaceAll('-', '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll(' ', '')

    return newInput ? parseInt(newInput) : ''
  }
}
