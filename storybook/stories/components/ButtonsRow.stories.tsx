import React from 'react'
import {storiesOf} from '@storybook/react-native'

import {Button, ButtonsRow} from '../../../src/components'

storiesOf('ButtonsRow', module).add('default', () => (
  <ButtonsRow>
    <Button value={'AC'} />
    <Button value={'+/-'} />
    <Button value={'%'} />
    <Button value={'/'} />
  </ButtonsRow>
))
