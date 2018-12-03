import React, { Component } from 'react';

import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

import Card from './Card';

import { layouts } from './Layout';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: ''
    };
  }

  onLayoutChange = (layout, layouts) => {
    // console.log('layout', layout);
    layout.forEach(e => {
      // console.log(e);
      if ((e.x == 0) & (e.y == 0)) {
        // console.log(e.i);
        this.setState({ currentTitle: e.i });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 4 }}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
          compactType="horizontal"
        >
          <div className="box" key="Shelf">
            <img
              className="center gridImage shelf"
              draggable="false"
              src="shelf2.png"
            />
            <h2 className="center" style={{ color: 'white' }}>
              Drag an icon into the scanner to find out more...
            </h2>
          </div>
          <div className="box" key="Card">
            <Card
              title={this.state.currentTitle}
              content={this.state.currentContent}
            />
          </div>
          <div className="box" key="Tools">
            <img
              className="center gridImage"
              draggable="false"
              src="tools.png"
            />
          </div>
          <div className="box" key="Contact Me">
            <img
              className="center gridImage"
              draggable="false"
              src="addressbook.png"
              ref={el => (this.containerLine = el)}
            />
          </div>
          <div className="box" key="Projects">
            <img
              className="center gridImage"
              draggable="false"
              src="code.png"
            />
          </div>
          <div className="box" key="Me">
            <img
              className="center gridImage me"
              draggable="false"
              src="me.jpeg"
            />
          </div>
        </ResponsiveGridLayout>
      </React.Fragment>
    );
  }
}

export default Grid;
