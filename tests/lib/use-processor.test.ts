import {useProcessor} from '../../src/lib'

import {renderHook, act} from '../utils'

it('create instance', () => {
  const {result} = renderHook(() => useProcessor())

  expect(result.current.value).toBeDefined()
  expect(result.current.execute).toBeInstanceOf(Function)
})

it('execute processor', () => {
  const {result} = renderHook(() => useProcessor())

  act(() => {
    result.current.execute('2')
    result.current.execute('+')
    result.current.execute('2')
    result.current.execute('=')
  })

  expect(result.current.value).toBe('4')
})
