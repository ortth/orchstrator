import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {

  render() {
    return (
      <div className="o-content c-home-content">
        <h1>Home page!</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }

};

export default Home;
