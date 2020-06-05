import React from 'react'

import {renderWithTheme} from '../utils'
import {Button, ButtonsRow} from '../../src/components'

it('renders correctly', () => {
  const tree = renderWithTheme(
    <ButtonsRow>
      <Button value={'AC'} />
      <Button value={'+/-'} />
      <Button value={'%'} />
      <Button value={'/'} />
    </ButtonsRow>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
