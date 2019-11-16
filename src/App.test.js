
import React from 'react' /* eslint-disable-line no-unused-vars */
import Enzyme, { shallow } from 'enzyme'
import EzymeAdapter from 'enzyme-adapter-react-16'
import App from './App' /* eslint-disable-line no-unused-vars */

Enzyme.configure({ adapter: new EzymeAdapter() })

/**
 * Factory Function fo create a Shallow Wrapper
 * @function setup
 * @param (object) prop
 * @param (any) state
 * @returns(ShallowWrapper)
 */
const setup = (props = {}, state = null) => {
  return shallow(<App{...props} />)
}

/**
 * return ShallowWrapper containing node(s) with the given dataTest value
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find({ dataTest: val })
}

it('renders without crashing', () => {
  const wrapper = setup()
  const appComp = findByTestAttr(wrapper, 'component-app')
  expect(appComp.length).toBe(1)
})

it('should exist a increment buttom', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'button-increment')
  expect(button.length).toBe(1)
})

it('should exist a  counter display', () => {
  const wrapper = setup()
  const display = findByTestAttr(wrapper, 'display-count')
  expect(display.length).toBe(1)
})

it('should coinatin 1 in counter display', () => { })

it('shold contain 1 in counter display ', () => { })
