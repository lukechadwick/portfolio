import React, { Component } from 'react';
import Navbar from './Navbar';
import Grid from './Grid';
import ParallaxScroll from './Parallax';

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
        <div className='container'>
          <Grid />
        </div>
        {/* <ParallaxScroll /> */}

        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default App;
