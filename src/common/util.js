export default {
  plus (number1, number2) {
    if (arguments.length !== 2) {
      throw new Error('argument')
    }
    return number1 + number2
  },
  minus (number1, number2) {
    return number1 - number2
  }
}
