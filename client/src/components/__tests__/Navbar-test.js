import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar.jsx';

describe('Navbar Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Navbar />).find('.navbarContainer').length).toEqual(1);
  });
});
