import React from 'react';

const CardContact = () => {
  return ( 
    <React.Fragment>
      <h5 className='card-title center'>Email, Linked-in or GitHub</h5>
      <div className='center'>
        <a
          href="mailto:llukechadwick@gmail.com?subject=Let's%20get%20in%20touch&body="
          target='_blank'
        >
          <img
            draggable='false'
            src='email.png'
            className='contactImage'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/lukeachadwick/'
          target='_blank'
        >
          <img
            draggable='false'
            src='linkedin.png'
            className='contactImage'
          />
        </a>
        <a href='https://github.com/lukechadwick' target='_blank'>
          <img
            draggable='false'
            src='github.png'
            className='contactImage'
          />
        </a>
      </div>
    </React.Fragment>
   );
}
 
export default CardContact;