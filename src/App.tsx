import React from 'react'
import {SafeAreaView} from 'react-native'
import styled from 'styled-components/native'

const Title = styled.Text`
  font-size: 25px;
  text-align: center;
`

const App = () => {
  return (
    <SafeAreaView>
      <Title>Hello world!</Title>
    </SafeAreaView>
  )
}

export default App
