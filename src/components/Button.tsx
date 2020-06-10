import React from 'react'
import styled from 'styled-components/native'

interface WrapperProps {
  readonly big?: boolean
  readonly dark?: boolean
  readonly primary?: boolean
}

interface ButtonProps extends WrapperProps {
  readonly value: string
}

const Wrapper = styled.TouchableOpacity<WrapperProps>`
  background-color: ${({theme}) => theme.colors.defaultGray}
  justify-content: center;
  width: 25%;
  border: 1px solid ${props => props.theme.colors.backgroundColor};

  ${props => props.dark && `background-color: ${props.theme.colors.darkGray}`}
  ${props => props.primary && `background-color: ${props.theme.colors.primaryColor}`}
  ${({big}) => big && 'width: 50%;'}
`

const Text = styled.Text`
  font-weight: 200;
  font-size: 45px;
  color: white;
  text-align: center;
`

export default function Button({value, big = false, dark = false, primary = false}: ButtonProps) {
  return (
    <Wrapper big={big} dark={dark} primary={primary}>
      <Text adjustsFontSizeToFit numberOfLines={1}>
        {value}
      </Text>
    </Wrapper>
  )
}
