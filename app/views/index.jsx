import React from 'react';

class Layout extends React.Component {

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
