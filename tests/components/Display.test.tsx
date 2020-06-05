import React from 'react'

import {renderWithTheme} from '../utils'
import {Display} from '../../src/components'

it('renders correctly', () => {
  const tree = renderWithTheme(<Display value={'123.456'} />).toJSON()
  expect(tree).toMatchSnapshot()
})
