import React from 'react';
import Router from 'react-router';
import {Route, RouteHandler, Link, DefaultRoute, NotFoundRoute} from 'react-router';
import Home from './components/views/home';
import About from './components/views/about';

/**
 * App Class component
 * @class
 *
 * @return {Component}
 **/
class App extends React.Component {

  /**
   * Render method
   * @method
   *
   * @return {Component}
   **/
  render() {
    return (
      <section className="o-wrapper">
        <RouteHandler />
      </section>
    );
  }

};

/**
 * Create route component
 * @method
 *
 **/
var routes = (
  <Route handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" path="/about" handler={About} />
  </Route>
);

/**
 * Initialize route component using React Router
 * @method
 *
 * @return {Component}
 **/
Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.getElementById('js-main-root'));
});
