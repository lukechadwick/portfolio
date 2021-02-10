import React from 'react';

const CardProjects = () => {
  return ( 
    <React.Fragment>
      <div className="project-container">
        <h4 className='card-title center'>
          A few things I've worked on...
        </h4>
        <br />
        <h4>Xiayu</h4>
        <p>
          A 2D platform/shooter written in Javascript and rendered using
          Canvas. Playable{' '}
          <a href='https://lukechadwick.github.io/xiayu/' target='_blank'>
            here.
          </a>
          <h6>Features:</h6>
          <ul>
            <li>Collision Detection</li>
            <li>Basic physics and gravity</li>
            <li>AI players</li>
            <li>Network Multiplayer</li>
            <li>Boss Fight</li>
          </ul>
        </p>
        <br />
        <h4>Linux Undervolt app for Intel CPUs</h4>
        <p>
          A Linux desktop app to undervolt Intel CPUs. Hosted{' '}
          <a
            href='https://github.com/lukechadwick/linux-intel-undervolt-gui/'
            target='_blank'
          >
            here.
          </a>
          <h6>Features:</h6>
          <ul>
            <li>Electron/React powered interface</li>
            <li>Granular voltage control of CPU components</li>
            <li>Outputting sensor data like CPU load/temp/clock-speed</li>
            <li>Stress-test/benchmarking tools to check stability of underclocks</li>
          </ul>
        </p>
        <br />
        <h4>C#</h4>
        <p>
          A few projects in C# ranging from a{' '}
          <a
            href='https://github.com/lukechadwick/FTDS-finish-the-day-sheet-'
            target='_blank'
          >
            simple app
          </a>{' '}
          I used to automate the paperwork at a previous job in
          hospitality, to a{' '}
          <a
            href='https://github.com/lukechadwick/CS-GO-Aimbot-ESP'
            target='_blank'
          >
            reseach project
          </a>{' '}
          into how people cheat in online games, in this case the popular
          game Counter-Strike: GO.
          <h6>Features:</h6>
          <ul>
            <li>Aim-bot</li>
            <li>Trigger-bot</li>
            <li>Memory library for interfacing with a windows executable and extracting data</li>
            <li>D3D ESP overlay</li>
            <li>Recoil/spray compensation</li>
          </ul>
        </p>
        <br />
        <h4>VPN Project</h4>
        <p>
          A VPN service aimed at providing an easy to use and performant
          experience. Powered by and hosted on Vultr running Ubuntu and
          using Shadowsocks to encrypt and protect traffic. Website
          powered by React/node/nginx and SSL certs provided by Let's
          Encrypt. Hosted{' '}
          <a href='https://codeproject.site/' target='_blank'>
            here.
          </a>
        </p>
        <br />
        <h4>GYST Dashboard</h4>
        <p>
          An all-in-one dashboard using widget based design, with
          resizable and draggable applets. Powered by React/Redux with
          Material-UI as the design framework. Hosted{' '}
          <a href='http://gyst-dash.herokuapp.com/' target='_blank'>
            here.
          </a>
        </p>
      </div>
    </React.Fragment>

   );
}
 
export default CardProjects;