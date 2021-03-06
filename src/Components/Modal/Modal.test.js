import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Modal from './Modal';

Enzyme.configure({ adapter: new EnzymeAdapter() })

let wrapper = shallow(<Modal />);

test('Test for Modal component', () => {    
    const modal = wrapper.find('.Modal');
    expect(modal).toHaveLength(1);

});