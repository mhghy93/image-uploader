import React, { Component, Fragment } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

class Loading extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="d-flex align-items-center justify-content-center px-5 pt-5 pb-5 image-uploader">
          <Card className="px-5 pt-3 pb-3">
            <Card.Body className="px-5">
              <h5 className="image-uploader-text">Uploading</h5>
              <ProgressBar className="progress-bar" now={60} />
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default Loading;
