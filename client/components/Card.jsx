import React, { Component } from 'react';
import CardContact from './cards/CardContact';
import CardMe from './cards/CardMe'
import CardProjects from './cards/CardProjects';
import CardTools from './cards/CardTools';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='card bg-light mb-3'>
        <h2 className='card-header'>{this.props.title}</h2>
        <div className='card-body'>
          {this.props.title == 'Me' && (
            <CardMe />
          )}
          {this.props.title == 'Contact Me' && (
            <CardContact />
          )}
          {this.props.title == 'Tools' && (
            <CardTools />
          )}
          {this.props.title == 'Projects' && (
            <CardProjects />
          )}
        </div>
      </div>
    );
  }
}

export default Card;
