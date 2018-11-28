import React, { Component } from 'react';
import Navbar from './Navbar';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div class="ocrloader">
          <em />
          <span />
        </div>
        <Grid />
      </React.Fragment>
    );
  }
}

export default App;
