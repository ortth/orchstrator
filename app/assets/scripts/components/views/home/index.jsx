import React from 'react';
import {Link} from 'react-router';

/**
 * Home Class component
 * @class
 *
 * @return {Component}
 **/
export class Home extends React.Component {

  /**
   * Render method
   * @method
   *
   * @return {Component}
   **/
  render() {
    return (
      <div className="o-content c-home-content">
        <h1>Home page!</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }

};
