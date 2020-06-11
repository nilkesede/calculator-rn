import React from 'react'
import {storiesOf} from '@storybook/react-native'
import {action} from '@storybook/addon-actions'

import {Button, ButtonsRow} from '../../../src/components'

storiesOf('ButtonsRow', module).add('default', () => (
  <ButtonsRow>
    <Button value={'AC'} onPress={action('button-click')} />
    <Button value={'+/-'} onPress={action('button-click')} />
    <Button value={'%'} onPress={action('button-click')} />
    <Button value={'/'} onPress={action('button-click')} />
  </ButtonsRow>
))
