import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {action} from '@storybook/addon-actions'

import {Keyboard} from '../../../src/components'

storiesOf('Keyboard', module).add('default', () => <Keyboard callback={action('process-callback')} />)
