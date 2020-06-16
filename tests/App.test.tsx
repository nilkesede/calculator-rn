import React from 'react'
import {render} from './utils'

import App from '../src/App'

it('renders correctly', () => {
  const tree = render(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
