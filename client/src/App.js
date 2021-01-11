import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import UploadedImage from './components/UploadedImage';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Loading from './components/Loading';

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/image/uploaded/:id" component={UploadedImage} />
            <Route exact path="/image/uploading" component={Loading} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
