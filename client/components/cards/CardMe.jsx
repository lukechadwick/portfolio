import React from 'react';

const CardMe = () => {
  return ( 
    <React.Fragment>
      <h5 className='card-title'>Luke Chadwick</h5>

      <img draggable='false' src='dev-icon.jpg' className='me-separator' />

      <p className='card-text'>
        Software, hardware and open-source enthusiast based in Auckland, New Zealand.
      </p>

      <img draggable='false' src='dev-icon.jpg' className='me-separator' />

      <p className='card-text'>
        I'm currently working for Shopify as a Plus Front-End Developer. Day to day I'm helping Shopify Plus merchants by building features, squashing bugs, or helping their developers understand our platform.
        <br />
        I also help build and maintain internal tools, from Chrome extensions, to full-stack React apps.
      </p>

      <img draggable='false' src='dev-icon.jpg' className='me-separator' />

      <p className='card-text'>
        Outside of work you'll find me gaming, playing volleyball, drums or out kayaking.
      </p>
    </React.Fragment>
   );
}
 
export default CardMe;