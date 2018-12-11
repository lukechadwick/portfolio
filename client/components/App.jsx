import React, { Component } from 'react';
import Navbar from './Navbar';
import Grid from './Grid';
import Parallax from './Parallax';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <div className="containerCenter"> */}
        {/* <div className="ocrloader">
            <em />
            <span />
          </div> */}
        {/* <Grid /> */}
        <Parallax />

        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default App;
