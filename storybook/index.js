import {AppRegistry} from 'react-native'
import {getStorybookUI, configure, addDecorator, addParameters} from '@storybook/react-native'
import {withTheme} from 'storybook-addon-ondevice-styled-theme'

import './rn-addons'
import {loadStories} from './story-loader'
import {name as appName} from '../app.json'
import {theme} from '../src/config'

addDecorator(withTheme)

addParameters({
  themes: [theme]
})

configure(() => {
  loadStories()
}, module)

AppRegistry.registerComponent(appName, () => getStorybookUI())
