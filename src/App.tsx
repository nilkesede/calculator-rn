import React, {useState, useCallback} from 'react'
import {StatusBar} from 'react-native'
import styled, {ThemeProvider} from 'styled-components/native'

import {theme} from './config'
import {Display, Keyboard} from './components'

const View = styled.View`
  flex: 1;
`

export default function App() {
  const [value, setValue] = useState('')

  const processor = useCallback((command: string) => {
    setValue(command)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <View>
        <Display value={value} />
        <Keyboard callback={processor} />
      </View>
    </ThemeProvider>
  )
}
