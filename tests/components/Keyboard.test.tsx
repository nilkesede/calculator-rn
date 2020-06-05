import React from 'react'

import {renderWithTheme} from '../utils'
import {Keyboard} from '../../src/components'

it('renders correctly', () => {
  const tree = renderWithTheme(<Keyboard />).toJSON()
  expect(tree).toMatchSnapshot()
})
