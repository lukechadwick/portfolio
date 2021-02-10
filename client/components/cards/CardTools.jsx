import React from 'react';

const CardTools = () => {
  return ( 
    <React.Fragment>
      <h4 className='card-title center'>The Tools of my trade</h4>
      <img draggable='false' src='html.png' className='toolImage' />
      <img draggable='false' src='css.png' className='toolImage' />
      <img draggable='false' src='js.png' className='toolImage' />
      <img draggable='false' src='liquid.png' className='toolImage' />
      <img draggable='false' src='node.png' className='toolImage' />
      <img draggable='false' src='react.png' className='toolImage' />
      <img draggable='false' src='csharp.png' className='toolImage' />
      <img draggable='false' src='rails.png' className='toolImage' />
    </React.Fragment>
   );
}
 
export default CardTools;