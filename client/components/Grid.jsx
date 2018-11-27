import React, { Component } from 'react';

import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

import Card from './Card';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTitle: '',
			currentContent: ''
		};
	}

	onLayoutChange = (layout, layouts) => {
		console.log('layout', layout);

		layout.forEach(e => {
			console.log(e);
			if ((e.x == 0) & (e.y == 0)) {
				console.log(e.i);
				this.setState({ currentTitle: e.i });
			}
		});
	};

	render() {
		let layouts = {
			lg: [
				{
					w: 2,
					h: 2,
					x: 0,
					y: 0,
					i: 'card'
					// minW: 2,
					// maxW: 2,
					// minH: 2,
					// maxH: 2,
					// moved: false,
					// static: false
				}
			]
		};

		return (
			<ResponsiveGridLayout
				className="layout"
				layouts={layouts}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
				onLayoutChange={(layout, layouts) =>
					this.onLayoutChange(layout, layouts)
				}
			>
				<div className="box" key="card">
					<Card
						title={this.state.currentTitle}
						content={this.state.currentContent}
					/>
				</div>
				<div className="box" key="Tools">
					<img className="center" draggable="false" src="big3.png" />
				</div>
				<div className="box" key="Contact Me">
					Contact
				</div>
			</ResponsiveGridLayout>
		);
	}
}

export default Grid;
