import React, { Component, Fragment } from 'react';
import { Button, Card, InputGroup, FormControl, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

class UploadedImage extends Component {
  render() {
    const { image } = this.props;
    return (
      <Fragment>
        <div className="d-flex align-items-center justify-content-center px-5 pt-5 pb-5 image-uploader">
          <Card className="px-3 pt-3 pb-3">
            <i className="fas fa-check-circle"></i>
            <Card.Body>
              <h5 className="image-uploader-text text-center">
                Uploaded Successfully
              </h5>
              <div className="bg-imag px-5 pt-3 pb-3">
                <Image className="px-5 pt-2 pb-2" src={image.imageUrl} fluid />
              </div>
              <div className="text-center">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="url"
                    aria-label="url"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button
                      className="p-2"
                      style={{
                        background: '#2F80ED',
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        color: '#ffffff',
                        borderRadius: '8px',
                        border: 'none',
                        outline: 'none',
                      }}
                      bsPrefix
                    >
                      Copy Link
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    );
  }
}

UploadedImage.propTypes = {
  image: PropTypes.object.isRequired,
};

export default UploadedImage;
