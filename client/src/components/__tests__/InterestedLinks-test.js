import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import InterestedLinks from '../InterestedLinks.jsx';

describe('InterestedLinks Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<InterestedLinks />).find('.interestedLinksContainer').length).toEqual(1);
  });
});