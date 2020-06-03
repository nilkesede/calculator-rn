import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  background-color: #303030;
  flex: 1;
  justify-content: flex-end;
`

const Text = styled.Text`
  font-size: 100px;
  text-align: right;
  font-weight: 100;
  color: white;
`

export default function Display({value}: {value: string}) {
  return (
    <Wrapper>
      <Text adjustsFontSizeToFit numberOfLines={1}>
        {value}
      </Text>
    </Wrapper>
  )
}
