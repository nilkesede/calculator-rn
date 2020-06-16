export default class Processor {
  readonly operations = new Set(['+/-', '%', '/', 'x', '-', '+', '='])
  public value = '0'
  private buffer = [0, 0]
  private bufferIndex = 0
  private wipeValue = false
  private operation = ''
  private lastCommand = ''

  private calculate() {
    switch (this.operation) {
      case '+/-':
        return this.buffer[0] * -1
      case '%':
        return this.buffer[0] / 100
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

  private addDigit(digit: string) {
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

  private setOperation(operation: string) {
    const isEqualSign = operation === '='
    const isPercent = operation === '%'
    const isToggleAbs = operation === '+/-'

    this.wipeValue = true

    if (isPercent || isToggleAbs) {
      this.operation = operation
      this.buffer[this.bufferIndex] = this.calculate()
      this.value = this.buffer[this.bufferIndex].toString()

      return
    }

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

  private clearAll() {
    this.value = '0'
    this.buffer = [0, 0]
    this.operation = ''
    this.bufferIndex = 0
    this.wipeValue = false
  }

  private isReplacingOperation(command: string) {
    return (
      this.operations.has(this.lastCommand) &&
      this.operations.has(command) &&
      this.lastCommand !== '=' &&
      command !== '='
    )
  }

  execute(command: string) {
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

    if (Number.isNaN(Number(command))) throw new Error('param must be a valid command or a number')

    this.lastCommand = command
    this.addDigit(command)
  }
}
