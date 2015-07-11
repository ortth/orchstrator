import React from 'react';

/**
 * Layout Class component
 * @class
 *
 * @return {Component}
 **/
class Layout extends React.Component {

  /**
   * Render method
   * @method
   *
   * @return {Component}
   **/
  render() {
    return(
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          <main id="js-main-root"></main>
          <script src="/scripts/app.min.js"></script>
        </body>
      </html>
    )
  }

}

export default Layout;
