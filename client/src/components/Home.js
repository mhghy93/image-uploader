import React, { Component, Fragment } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import ImageLogo from '../images/image.svg';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="d-flex align-items-center justify-content-center px-5 pt-5 pb-5 image-uploader">
          <Card className="px-3 pt-3 pb-3">
            <Card.Body>
              <h5 className="image-uploader-text text-center">
                Upload Your Image
              </h5>
              <p
                style={{ fontSize: 10 }}
                className="text-muted text-center image-uploader-text"
              >
                File should be Jpeg, Png,..
              </p>
              <div className="bg-image px-5 pt-3 pb-3">
                <Image className="px-5 pt-2 pb-2" src={ImageLogo} fluid />
                <p
                  style={{ fontSize: 12 }}
                  className="text-muted text-center mt-3 image-uploader-text"
                >
                  Drag and Drop your image here
                </p>
              </div>
              <p
                style={{ fontSize: 12 }}
                className="text-muted text-center mt-3 image-uploader-text"
              >
                or
              </p>
              <div className="text-center">
                <Button
                  className="p-2"
                  style={{
                    background: '#2F80ED',
                    color: '#ffffff',
                    borderRadius: '8px',
                    border: 'none',
                    outline: 'none',
                  }}
                  bsPrefix
                >
                  Choose a file
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default Home;
