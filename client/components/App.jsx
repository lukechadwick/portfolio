import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Card from './Card';

import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />

				<ResponsiveGridLayout
					className="layout"
					breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
					cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
				>
					<div className="box" key="a" data-grid={{ x: 0, y: 0, w: 4, h: 2 }}>
						<Card />
					</div>
					<div
						className="boxx"
						key="b"
						data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}
					>
						<img className="center" draggable="false" src="big3.png" />
					</div>
					<div className="box" key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
						c
					</div>
				</ResponsiveGridLayout>
			</React.Fragment>
		);
	}
}

export default App;
