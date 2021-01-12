import React, { Component, Fragment } from 'react';

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="mt-5">Not found</h1>
        <p className="lead">The page you are looking for does not exist...</p>
      </Fragment>
    );
  }
}

export default NotFound;
