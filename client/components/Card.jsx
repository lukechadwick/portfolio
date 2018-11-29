import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card bg-light mb-3">
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          {this.props.title == 'Me' && (
            <React.Fragment>
              <h5 className="card-title">Luke Chadwick</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </React.Fragment>
          )}
          {this.props.title == 'Contact Me' && (
            <React.Fragment>
              <h5 className="card-title center">Email, Linked-in or GitHub</h5>
              <div className="center">
                <a
                  href="mailto:llukechadwick@gmail.com?subject=Let's%20get%20in%20touch&body="
                  target="_blank"
                >
                  <img
                    draggable="false"
                    src="email.png"
                    className="contactImage"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/lukeachadwick/"
                  target="_blank"
                >
                  <img
                    draggable="false"
                    src="linkedin.png"
                    className="contactImage"
                  />
                </a>
                <a href="https://github.com/lukechadwick" target="_blank">
                  <img
                    draggable="false"
                    src="github.png"
                    className="contactImage"
                  />
                </a>
              </div>
            </React.Fragment>
          )}
          {this.props.title == 'Tools' && (
            <React.Fragment>
              <h4 className="card-title center">The Tools of my trade</h4>
              <img draggable="false" src="js.png" className="toolImage" />
              <img draggable="false" src="node.png" className="toolImage" />
              <img draggable="false" src="react.png" className="toolImage" />
              <img draggable="false" src="html.png" className="toolImage" />
              <img draggable="false" src="css.png" className="toolImage" />
              <img draggable="false" src="csharp.png" className="toolImage" />
              <img draggable="false" src="rails.png" className="toolImage" />
            </React.Fragment>
          )}
          {this.props.title == 'Projects' && (
            <React.Fragment>
              <h5 className="card-title center">A few things I've worked on</h5>
              <h4>Xiayu</h4>
              <p>
                A 2D platform/shooter written in Javascript and rendered using
                Canvas, featuring collision detection, basic physics, AI, and of
                course, a boss fight. Playable{' '}
                <a href="https://lukechadwick.github.io/xiayu/" target="_blank">
                  here.
                </a>
              </p>
              <h4>GTST Dashboard</h4>
              <p>
                An all-in-one dashboard using widget based design, with
                resizable and draggable applets. Powered by React/Redux with
                Material-UI as the design framework. Hosted{' '}
                <a href="http://gyst-dash.herokuapp.com/" target="_blank">
                  here.
                </a>
              </p>
              <h4>VPN Project</h4>
              <p>
                A VPN service aimed at providing an easy to use and performant
                experience. Powered by and hosted on Vultr running Ubuntu and
                using Shadowsocks to encrypt and protect traffic. Website
                powered by React/node/nginx and SSL certs provided by Let's
                Encrypt. Hosted{' '}
                <a href="https://codeproject.fun/" target="_blank">
                  here.
                </a>
              </p>
              <h4>Ruby on Rails Blog</h4>
              <p>
                A simple blog website make to learn basic CRUD operations in
                Ruby on Rails, styled with Bootstrap 4. Hosted{' '}
                <a
                  href="http://rubyonrails-blog.herokuapp.com/"
                  target="_blank"
                >
                  here.
                </a>
              </p>
              <h4>C#</h4>
              <p>
                A few projects in C# ranging from a{' '}
                <a
                  href="https://github.com/lukechadwick/FTDS-finish-the-day-sheet-"
                  target="_blank"
                >
                  simple app
                </a>{' '}
                I used to automate the paperwork at a previous job in
                hospitality, to an{' '}
                <a
                  href="https://github.com/lukechadwick/CS-GO-Aimbot-ESP"
                  target="_blank"
                >
                  reseach project
                </a>{' '}
                into how people cheat in online games, in this case the popular
                game Counter-Strike: GO
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
