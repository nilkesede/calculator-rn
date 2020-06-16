import React, {ReactElement} from 'react'
import renderer from 'react-test-renderer'
import {renderHook} from '@testing-library/react-hooks'
import {ThemeProvider} from 'styled-components/native'

import {theme} from '../src/config'

export function renderWithTheme(component: ReactElement) {
  return renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

export const render = renderer.create

export {renderHook}
