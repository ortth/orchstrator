import React from 'react';
import {Link} from 'react-router';

/**
 * About Class component
 * @class
 *
 * @return {Component}
 **/
export class About extends React.Component {

  /**
   * Render method
   * @method
   *
   * @return {Component}
   **/
  render() {
    return (
      <div className="o-content c-about-content">
        <h1>About page!</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }

};
