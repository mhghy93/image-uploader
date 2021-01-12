import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import UploadedImage from './components/UploadedImage';
import Home from './components/Home';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/image/uploaded/:id" component={UploadedImage} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
