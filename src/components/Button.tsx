import React from 'react'
import styled from 'styled-components/native'

interface WrapperProps {
  readonly big: boolean
}

const Wrapper = styled.View<WrapperProps>`
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
  value: string
  big?: boolean
}) {
  return (
    <Wrapper big={big}>
      <Text adjustsFontSizeToFit numberOfLines={1}>
        {value}
      </Text>
    </Wrapper>
  )
}
