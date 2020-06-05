import React from 'react'
import {StatusBar} from 'react-native'
import styled, {ThemeProvider} from 'styled-components/native'

import {theme} from './config'
import {Display, Keyboard} from './components'

const View = styled.View`
  flex: 1;
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <View>
        <Display value={'123.456'} />
        <Keyboard />
      </View>
    </ThemeProvider>
  )
}
