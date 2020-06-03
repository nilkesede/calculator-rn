import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import {Keyboard} from '../../src/components'

it('renders correctly', () => {
  const tree = renderer.create(<Keyboard />).toJSON()
  expect(tree).toMatchSnapshot()
})
