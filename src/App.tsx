import React from 'react'
import {SafeAreaView} from 'react-native'

import {Display} from './components'

export default function App() {
  return (
    <SafeAreaView>
      <Display value={'123.456'} />
    </SafeAreaView>
  )
}
