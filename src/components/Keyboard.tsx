import React from 'react'
import styled from 'styled-components/native'

import ButtonsRow from './ButtonsRow'
import Button from './Button'

const Wrapper = styled.View`
  background-color: ${props => props.theme.colors.backgroundColor};
  flex: 2;
`
export default function Keyboard() {
  return (
    <Wrapper>
      <ButtonsRow>
        <Button dark value={'AC'} />
        <Button dark value={'+/-'} />
        <Button dark value={'%'} />
        <Button primary value={'/'} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'7'} />
        <Button value={'8'} />
        <Button value={'9'} />
        <Button primary value={'x'} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'4'} />
        <Button value={'5'} />
        <Button value={'6'} />
        <Button primary value={'-'} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'1'} />
        <Button value={'2'} />
        <Button value={'3'} />
        <Button primary value={'+'} />
      </ButtonsRow>
      <ButtonsRow>
        <Button big value={'0'} />
        <Button value={'.'} />
        <Button primary value={'='} />
      </ButtonsRow>
    </Wrapper>
  )
}
