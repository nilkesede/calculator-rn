import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Display from '../../src/components/Display'

it('renders correctly', () => {
  renderer.create(<Display value={'123.456'} />)
})
