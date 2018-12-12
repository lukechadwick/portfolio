import React, { Component } from 'react';

import { Parallax } from 'react-parallax';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

class ParallaxScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Parallax bgImage={'gg.png'} strength={500}>
          <div style={{ height: 500, maxWidth: '80%' }}>
            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
            <div>
              <h1>Xiayu</h1>
            </div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax
          bgImage={'https://picsum.photos/1200/700'}
          blur={{ min: -1, max: 3 }}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>Dynamic Blur</div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax
          bgImage={'https://picsum.photos/1200/700'}
          blur={{ min: -1, max: 3 }}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>Dynamic Blur</div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax
          bgImage={'https://picsum.photos/1200/700'}
          blur={{ min: -1, max: 3 }}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>Dynamic Blur</div>
          </div>
        </Parallax>
      </React.Fragment>
    );
  }
}

export default ParallaxScroll;
