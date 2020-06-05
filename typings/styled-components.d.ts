import {theme} from '../src/config'

type CustomTheme = typeof theme

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {}
}

export interface DefaultTheme {}
