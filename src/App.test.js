
import React from 'react' /* eslint-disable-line no-unused-vars */
import Enzyme, { shallow } from 'enzyme'
import EzymeAdapter from 'enzyme-adapter-react-16'
import App from './App' /* eslint-disable-line no-unused-vars */

Enzyme.configure({ adapter: new EzymeAdapter() })

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  const appComp = wrapper.find({ dataTest: 'component-app' })
  expect(appComp.length).toBe(1)
})

it('should exist a increment buttom', () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find({ dataTest: 'button-increment' })
  expect(button.length).toBe(1)
})

it('should exist a  counter display', () => {
  const wrapper = shallow(<App />)
  const display = wrapper.find({ dataTest: 'display-count' })
  expect(display.length).toBe(1)
})

it('should coinatin 1 in counter display', () => { })

it('shold contain 1 in counter display ', () => { })
