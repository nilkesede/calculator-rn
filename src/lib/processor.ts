export default class Processor {
  public value = '0'
  private operations = new Set(['%', '/', 'x', '-', '+', '='])
  private buffer = [0, 0]
  private bufferIndex = 0
  private wipeValue = false
  private operation = ''
  private lastCommand = ''

  calculate() {
    switch (this.operation) {
      case '%':
        return this.buffer[0] % this.buffer[1]
      case '/':
        return this.buffer[0] / this.buffer[1]
      case 'x':
        return this.buffer[0] * this.buffer[1]
      case '-':
        return this.buffer[0] - this.buffer[1]
      case '+':
        return this.buffer[0] + this.buffer[1]
      default:
        return this.buffer[0]
    }
  }

  addDigit(digit: string) {
    const isDot = digit === '.'
    const wipeValue = (this.value === '0' && !isDot) || this.wipeValue

    if (isDot && this.value.includes('.') && !wipeValue) return this.buffer[this.bufferIndex].toString()

    const emptyValue = isDot ? '0' : ''
    const currentValue = wipeValue ? emptyValue : this.value

    this.value = currentValue + digit
    this.wipeValue = false

    this.buffer[this.bufferIndex] = Number.parseFloat(this.value) ?? 0

    return this.buffer[this.bufferIndex].toString()
  }

  setOperation(operation: string) {
    const isEqualSign = operation === '='

    this.wipeValue = true

    if (this.bufferIndex === 0 && !isEqualSign) {
      this.operation = operation
      this.bufferIndex = 1
      return
    }

    if (this.bufferIndex === 1) {
      this.buffer[0] = this.calculate()
      this.buffer[1] = 0

      this.value = this.buffer[0].toString()
      this.value = this.value.endsWith('.0') ? this.value.split('.')[0] : this.value

      this.operation = isEqualSign ? '' : operation
      this.bufferIndex = isEqualSign ? 0 : 1
    }
  }

  clearAll() {
    this.value = '0'
    this.buffer = [0, 0]
    this.operation = ''
    this.bufferIndex = 0
    this.wipeValue = false
  }

  isReplacingOperation(command: string) {
    return (
      this.operations.has(this.lastCommand) &&
      this.operations.has(command) &&
      this.lastCommand !== '=' &&
      command !== '='
    )
  }

  applyCommand(command: string) {
    if (this.isReplacingOperation(command)) {
      this.operation = command
      return
    }

    if (command === 'AC') {
      this.clearAll()
      return
    }

    if (this.operations.has(command)) {
      this.setOperation(command)
      return
    }

    this.lastCommand = command
    this.addDigit(command)
  }
}
