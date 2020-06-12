import React from 'react'

import {renderWithTheme} from '../utils'
import {Button, ButtonsRow} from '../../src/components'

it('renders correctly', () => {
  const tree = renderWithTheme(
    <ButtonsRow>
      <Button value={'AC'} onPress={() => {}} />
      <Button value={'+/-'} onPress={() => {}} />
      <Button value={'%'} onPress={() => {}} />
      <Button value={'/'} onPress={() => {}} />
    </ButtonsRow>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
