import React from 'react';
import {Link} from 'react-router';

export class About extends React.Component {

  render() {
    return (
      <div className="c-about-content">
        <h1>About page!</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }

};
