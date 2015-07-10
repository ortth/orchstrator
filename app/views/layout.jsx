import React from 'react';

class Layout extends React.Component {

  static propTypes = {
    title: React.Proptypes.string
  }

  render() {
    return(
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/main.css" />
        </head>
        <body>
          {this.props.children}
          <script src="/scripts/app.min.js"></script>
        </body>
      </html>
    )
  }

}

export default Layout;
