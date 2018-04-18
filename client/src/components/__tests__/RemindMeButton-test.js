import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import RemindMeButton from '../RemindMeButton.jsx';

describe('RemindMeButton Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<RemindMeButton />).find('#remindMeComponent').length).toEqual(1);
  });
});