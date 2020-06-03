import React from 'react'
import styled from 'styled-components/native'

import ButtonsRow from './ButtonsRow'
import Button from './Button'

const Wrapper = styled.View`
  background-color: #303030;
  flex: 2;
`
export default function Keyboard() {
  return (
    <Wrapper>
      <ButtonsRow>
        <Button value={'AC'} />
        <Button value={'+/-'} />
        <Button value={'%'} />
        <Button value={'/'} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'7'} />
        <Button value={'8'} />
        <Button value={'9'} />
        <Button value={'x'} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'4'} />
        <Button value={'5'} />
        <Button value={'6'} />
        <Button value={'-'} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'1'} />
        <Button value={'2'} />
        <Button value={'3'} />
        <Button value={'+'} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'0'} big={true} />
        <Button value={'.'} />
        <Button value={'='} />
      </ButtonsRow>
    </Wrapper>
  )
}
