import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import {Display} from '../../src/components'

it('renders correctly', () => {
  const tree = renderer.create(<Display value={'123.456'} />).toJSON()
  expect(tree).toMatchSnapshot()
})
