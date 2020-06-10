import React from 'react'
import {StatusBar} from 'react-native'
import styled, {ThemeProvider} from 'styled-components/native'

import {theme} from './config'
import {Display, Keyboard} from './components'
import {useProcessor} from './lib'

const View = styled.View`
  flex: 1;
`

export default function App() {
  const {value, execute} = useProcessor()

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <View>
        <Display value={value} />
        <Keyboard callback={execute} />
      </View>
    </ThemeProvider>
  )
}
