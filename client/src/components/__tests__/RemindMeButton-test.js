import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import RemindMeButton from '../RemindMeButton.jsx';

describe('RemindMeButton Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<RemindMeButton />).find('#remindMeComponent').length).toEqual(1);
  });

  it('should render a reminderForm when handleFormClick is triggered', () => {
    const wrapper = shallow(<RemindMeButton />);
    expect(wrapper.find('.reminderFormContainerWrapper').length).toEqual(0);
    wrapper.instance().handleFormClick();
    wrapper.update();
    expect(wrapper.find('.reminderFormContainerWrapper').length).toEqual(1);
  });

  it('should close the reminderForm when handleExitFormClick is triggered', () => {
    const wrapper = shallow(<RemindMeButton />);

    // wrapper.instance().state.reminderForm = true;
    // console.log(wrapper.instance());
    // wrapper.update(); <-- find out why this doesn't work. Would be a more isolated test
    wrapper.instance().handleFormClick();
    wrapper.update();

    expect(wrapper.find('.reminderFormContainerWrapper').length).toEqual(1);
    wrapper.instance().handleExitFormClick();
    wrapper.update();
    expect(wrapper.find('.reminderFormContainerWrapper').length).toEqual(0);
  });

  it('should set validEmail state to false if checkEmailValidity is invoked when emailInput is empty', () => {
    const wrapper = shallow(<RemindMeButton />);

    // wrapper.instance().state.reminderForm = true;
    // wrapper.update(); <-- Why doesn't this work? Would be a more isolated test.
    wrapper.instance().handleFormClick();
    wrapper.update();

    wrapper.instance().checkEmailValidity();
    wrapper.update();
    expect(wrapper.instance().state.validEmail).toEqual(false);
  });
});
