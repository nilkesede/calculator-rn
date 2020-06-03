import React from 'react'
import {storiesOf} from '@storybook/react-native'

import {withKnobs, text} from '@storybook/addon-knobs'

import {Display} from '../../../src/components'

storiesOf('Display', module)
  .addDecorator(withKnobs)
  .add('default', () => <Display value={text('numbers', '123.456')} />)
