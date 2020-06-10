import {useState, useCallback} from 'react'

import Processor from './processor'

export default function useProcessor() {
  const [processor] = useState(new Processor())
  const [value, setValue] = useState('')

  const applyCommand = useCallback(
    command => {
      processor.applyCommand(command)
      setValue(processor.value)
    },
    [processor]
  )

  return {value, applyCommand}
}
