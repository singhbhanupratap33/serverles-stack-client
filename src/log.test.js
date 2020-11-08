import React from 'react';

import { shallow } from 'enzyme';

import login from './log';

import Login from './log';

describe('Test case for testing login', () => {
    let wrapper; test('username check', () => {
        wrapper = shallow(<Login />);
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'bhanupratap' } });
        expect(wrapper.state('username')).toEqual('bhanupratap');
    })
    it('password check', () => { wrapper = shallow(<Login />); wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'bhanup123pass' } }); expect(wrapper.state('password')).toEqual('bhanup123pass'); })

    it('login check with right data', () => {
        wrapper = shallow(<Login />);
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'bhanupratap' } }); 
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'bhanup123pass' } }); wrapper.find('button').simulate('click'); expect(wrapper.state('isLogined')).toBe(true);
    })

    it('login check with wrong data', () => {
        wrapper = shallow(<Login />);
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'username', value: 'bhanupratap' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'bhanup123passwronpass' } }); wrapper.find('button').simulate('click'); expect(wrapper.state('isLogined')).toBe(false);
    })
})

