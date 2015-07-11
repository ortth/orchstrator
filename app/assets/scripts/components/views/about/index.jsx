import React from 'react';
import {Link} from 'react-router';

class About extends React.Component {

  render() {
    return (
      <div className="o-content c-about-content">
        <h1>About page!</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }

};

export default About;
