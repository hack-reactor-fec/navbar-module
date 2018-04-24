import React, { Component } from 'react';
import axios from 'axios';
import NavLinks from './NavLinks.jsx';
import InterestedLinks from './InterestedLinks.jsx';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: 15,
      faqTotal: 0,
      updatesTotal: 0,
      commentsTotal: 0,
    };
  }

  componentDidMount() {
    const context = this;
    axios.get(`http://localhost:3002/api/navbar/${this.props.projectId}`)
      .then((response) => {
        console.log(response);
        context.setState({
          faqTotal: response.data[0].faq,
          updatesTotal: response.data[0].updates,
          commentsTotal: response.data[0].comments,
        });
      })
      .catch((error) => {
        console.log('There was an error fetching this project:', error);
      });
  }

  render() {
    return (
      <div className="navbarContainerWrapper">
        <div className="navbarContainer">
          <NavLinks faqTotal={this.state.faqTotal} updatesTotal={this.state.updatesTotal} commentsTotal={this.state.commentsTotal} />
          <InterestedLinks projectId={this.state.projectId} />
        </div>
      </div>
    );
  }
}
export default Navbar;
