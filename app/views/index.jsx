import React from 'react';
import Layout from './layout';

class Index extends React.Component {

  static propTypes = {
    title: React.Proptypes.string,
    list: React.Proptypes.array
  },

  render() {
    return(
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Copyright (c) 2015 Copyright Holder All Rights Reserved.</p>
      </Layout>
    );
  }

}

export default Index;
