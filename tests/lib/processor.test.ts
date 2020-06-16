import {Processor} from '../../src/lib'

const processor = new Processor()

it('create instance', () => {
  expect(processor).toBeInstanceOf(Processor)
})

it('clear all', () => {
  expect(processor.execute('A/C')).toBeUndefined()
})
