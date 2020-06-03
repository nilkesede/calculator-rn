import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import {Button} from '../../src/components'

it('renders correctly', () => {
  const tree = renderer.create(<Button value={'OK'} />).toJSON()
  expect(tree).toMatchSnapshot()
})
