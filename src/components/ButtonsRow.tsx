import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
`
export default function ButtonsRow({children}: {children: JSX.Element[]}) {
  return <Wrapper>{children}</Wrapper>
}
