import React from 'react'
import {storiesOf} from '@storybook/react-native'

import {Button} from '../../../src/components'

storiesOf('Button', module)
  .add('default', () => <Button value={'OK'} />)
  .add('big', () => <Button big value={'OK'} />)
  .add('dark', () => <Button dark value={'OK'} />)
  .add('primary', () => <Button primary value={'OK'} />)
