import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import NavButton from '../NavButton.jsx';

describe('NavButton Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<NavButton />).find('.navButton').length).toEqual(1);
  });
});
