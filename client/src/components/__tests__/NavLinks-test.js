import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import NavLinks from '../NavLinks.jsx';

describe('NavLinks Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<NavLinks />).find('.navLinksContainer').length).toEqual(1);
  });

  it('should render 5 navButtons without throwing an error', () => {
    expect(shallow(<NavLinks />).find('NavButton').length).toEqual(5);
  });
});