import React, {ReactElement} from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components/native'

import {theme} from '../src/config'

export function renderWithTheme(component: ReactElement) {
  return renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}
