import React from 'react'
import {storiesOf} from '@storybook/react-native'

import {Button} from '../../../src/components'

storiesOf('Button', module).add('default', () => <Button value={'OK'} />)
