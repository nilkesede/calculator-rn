import {useProcessor} from '../../src/lib'

import {renderHook} from '../utils'

it('create instance', () => {
  const {result} = renderHook(() => useProcessor())

  expect(result.current.value).toBeDefined()
  expect(result.current.execute).toBeInstanceOf(Function)
})
