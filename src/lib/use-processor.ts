import {useState, useCallback} from 'react'

import Processor from './processor'

export default function useProcessor() {
  const [processor] = useState(new Processor())
  const [value, setValue] = useState('')

  const execute = useCallback(
    command => {
      processor.execute(command)
      setValue(processor.value)
    },
    [processor]
  )

  return {value, execute}
}
