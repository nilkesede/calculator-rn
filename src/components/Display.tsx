import React from 'react'
import styled from 'styled-components/native'

const Text = styled.Text`
  font-size: 25px;
  text-align: center;
`

export default function Display({value}: {value: string}) {
  return <Text>{value}</Text>
}
