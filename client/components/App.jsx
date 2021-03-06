import React, { Component } from 'react';
import Navbar from './Navbar';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='container'>
          <Grid />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
