import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import {Button, ButtonsRow} from '../../src/components'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ButtonsRow>
        <Button value={'AC'} />
        <Button value={'+/-'} />
        <Button value={'%'} />
        <Button value={'/'} />
      </ButtonsRow>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
