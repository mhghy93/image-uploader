import React, { Component, Fragment } from 'react';
import Loading from './Loading';

class UploadedImage extends Component {
  state = { loading: true };
  render() {
    return (
      <Fragment>
        {this.state.loading ? <Loading /> : <p>Image Uploaded</p>}
      </Fragment>
    );
  }
}

export default UploadedImage;
