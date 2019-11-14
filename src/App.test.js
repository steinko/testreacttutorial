import React from 'react';
import Enzyme from 'enzyme';
import EzymeAdapter from  'enzyme-adapter-react-16';
import App from './App';
import {shallow} from 'enzyme'

Enzyme.configure({adapter: new EzymeAdapter()});

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
})
