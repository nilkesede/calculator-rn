import React from 'react'
import {StatusBar} from 'react-native'
import styled from 'styled-components/native'

import {Display, Keyboard} from './components'

const View = styled.View`
  flex: 1;
`

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View>
        <Display value={'123.456'} />
        <Keyboard />
      </View>
    </>
  )
}
