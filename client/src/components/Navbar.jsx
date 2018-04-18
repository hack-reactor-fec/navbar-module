import React, { Component } from 'react';
import NavLinks from './NavLinks.jsx';
import InterestedLinks from './InterestedLinks.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqTotal: 0,
      updatesTotal: 0,
      commentsTotal: 0,
    };
  }

  render() {
    return (
      <div className="navbarContainer">
        <NavLinks faqTotal={this.state.faqTotal} updatesTotal={this.state.updatesTotal} commentsTotal={this.state.commentsTotal} />
        <InterestedLinks />
      </div>
    );
  }
}
export default Navbar;
