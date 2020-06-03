import {AppRegistry} from 'react-native'
import {getStorybookUI, configure} from '@storybook/react-native'

import './rn-addons'
import {loadStories} from './story-loader'
import {name as appName} from '../app.json'

configure(() => {
  loadStories()
}, module)

AppRegistry.registerComponent(appName, () => getStorybookUI({}))
