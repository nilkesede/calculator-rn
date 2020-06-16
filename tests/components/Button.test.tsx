import React from 'react'
import {TouchableOpacity} from 'react-native'

import {renderWithTheme} from '../utils'
import {Button} from '../../src/components'

it('renders correctly', () => {
  const buttonDefault = renderWithTheme(<Button value={'OK'} />).toJSON()
  expect(buttonDefault).toMatchSnapshot()

  const buttonPrimary = renderWithTheme(<Button primary value={'OK'} />).toJSON()
  expect(buttonPrimary).toMatchSnapshot()

  const buttonDark = renderWithTheme(<Button dark value={'OK'} />).toJSON()
  expect(buttonDark).toMatchSnapshot()

  const buttonBig = renderWithTheme(<Button big value={'OK'} />).toJSON()
  expect(buttonBig).toMatchSnapshot()

  const buttonPrimaryBig = renderWithTheme(<Button primary big value={'OK'} />).toJSON()
  expect(buttonPrimaryBig).toMatchSnapshot()

  const buttonPrimaryDarkBig = renderWithTheme(<Button primary dark big value={'OK'} />).toJSON()
  expect(buttonPrimaryDarkBig).toMatchSnapshot()
})

it('call function onPress', () => {
  const onPress = jest.fn()
  const button = renderWithTheme(<Button value={'OK'} onPress={onPress} />)

  button.root.findByType(TouchableOpacity).props.onPress()

  expect(onPress).toHaveBeenCalledTimes(1)
  expect(button.toJSON()).toMatchSnapshot()
})
