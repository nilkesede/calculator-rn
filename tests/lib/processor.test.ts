import {Processor} from '../../src/lib'

const processor = new Processor()

it('create instance', () => {
  expect(processor).toBeInstanceOf(Processor)
})

it('clear all', () => {
  processor.execute('32')
  expect(processor.value).toBe('32')
  processor.execute('AC')
  expect(processor.value).toBe('0')
})

it('sum', () => {
  processor.execute('2')
  processor.execute('+')
  processor.execute('2')
  processor.execute('=')
  expect(processor.value).toBe('4')
})

it('subtract', () => {
  processor.execute('6')
  processor.execute('-')
  processor.execute('2')
  processor.execute('=')
  expect(processor.value).toBe('4')
})

it('multiply', () => {
  processor.execute('2')
  processor.execute('x')
  processor.execute('2')
  processor.execute('=')
  expect(processor.value).toBe('4')
})

it('divide', () => {
  processor.execute('8')
  processor.execute('/')
  processor.execute('2')
  processor.execute('=')
  expect(processor.value).toBe('4')
})

it('percent', () => {
  processor.execute('10')
  processor.execute('%')
  expect(processor.value).toBe('0.1')
})

it('toggle abs', () => {
  processor.execute('10')
  processor.execute('+/-')
  expect(processor.value).toBe('-10')
})

it('replace operation', () => {
  processor.execute('6')
  processor.execute('+')
  processor.execute('-')
  processor.execute('2')
  processor.execute('=')
  expect(processor.value).toBe('4')
})
