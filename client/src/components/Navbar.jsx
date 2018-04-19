import React, { Component } from 'react';
import NavLinks from './NavLinks.jsx';
import InterestedLinks from './InterestedLinks.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqTotal: 9,
      updatesTotal: 3,
      commentsTotal: 3271,
    };
  }

  render() {
    return (
      <div className="navbarContainerWrapper">
        <div className="navbarContainer">
          <NavLinks faqTotal={this.state.faqTotal} updatesTotal={this.state.updatesTotal} commentsTotal={this.state.commentsTotal} />
          <InterestedLinks />
        </div>
      </div>
    );
  }
}
export default Navbar;
