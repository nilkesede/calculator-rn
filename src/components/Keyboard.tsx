import React from 'react'
import styled from 'styled-components/native'

import ButtonsRow from './ButtonsRow'
import Button from './Button'

const Wrapper = styled.View`
  background-color: ${props => props.theme.colors.backgroundColor};
  flex: 2;
`
export default function Keyboard({callback}: {callback: (command: string) => void}) {
  return (
    <Wrapper>
      <ButtonsRow>
        <Button dark value={'AC'} onPress={callback} />
        <Button dark value={'+/-'} onPress={callback} />
        <Button dark value={'%'} onPress={callback} />
        <Button primary value={'/'} onPress={callback} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'7'} onPress={callback} />
        <Button value={'8'} onPress={callback} />
        <Button value={'9'} onPress={callback} />
        <Button primary value={'x'} onPress={callback} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'4'} onPress={callback} />
        <Button value={'5'} onPress={callback} />
        <Button value={'6'} onPress={callback} />
        <Button primary value={'-'} onPress={callback} />
      </ButtonsRow>
      <ButtonsRow>
        <Button value={'1'} onPress={callback} />
        <Button value={'2'} onPress={callback} />
        <Button value={'3'} onPress={callback} />
        <Button primary value={'+'} onPress={callback} />
      </ButtonsRow>
      <ButtonsRow>
        <Button big value={'0'} onPress={callback} />
        <Button value={'.'} onPress={callback} />
        <Button primary value={'='} onPress={callback} />
      </ButtonsRow>
    </Wrapper>
  )
}
