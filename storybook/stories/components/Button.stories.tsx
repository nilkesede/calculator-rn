import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {action} from '@storybook/addon-actions'

import {Button} from '../../../src/components'

storiesOf('Button', module)
  .add('default', () => <Button value={'OK'} onPress={action('button-click')} />)
  .add('big', () => <Button big value={'OK'} onPress={action('button-click')} />)
  .add('dark', () => <Button dark value={'OK'} onPress={action('button-click')} />)
  .add('primary', () => <Button primary value={'OK'} onPress={action('button-click')} />)
