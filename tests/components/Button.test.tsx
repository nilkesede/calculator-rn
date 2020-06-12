import React from 'react'

import {renderWithTheme} from '../utils'
import {Button} from '../../src/components'

it('renders correctly', () => {
  const tree = renderWithTheme(<Button value={'OK'} onPress={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})
