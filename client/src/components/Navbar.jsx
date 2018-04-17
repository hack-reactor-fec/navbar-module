import React, { Component } from 'react';
import NavLinks from './Navlinks.jsx';
import InterestedLinks from './InterestedLinks.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="navbarContainer">
        <NavLinks />
        <InterestedLinks />
      </div>
    );
  }
}
export default Navbar;
