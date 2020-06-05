import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View<{
  readonly big?: boolean
}>`
  background-color: #525252;
  flex: 1;
  justify-content: center;
  margin: 1px;
  ${props => props.big && 'flex: 2;'}
`

const Text = styled.Text`
  font-weight: 200;
  font-size: 45px;
  color: white;
  text-align: center;
`

export default function Button({
  value,
  big = false
}: {
  readonly value: string
  readonly big?: boolean
}) {
  return (
    <Wrapper big={big}>
      <Text adjustsFontSizeToFit numberOfLines={1}>
        {value}
      </Text>
    </Wrapper>
  )
}
