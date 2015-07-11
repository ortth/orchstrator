import React from 'react';
import {Link} from 'react-router';

export class Home extends React.Component {

  render() {
    return (
      <h1>Home page!</h1>
      <Link to="/about">About</Link>
    );
  }

};
