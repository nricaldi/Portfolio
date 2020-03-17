import React from 'react';

const Card = props => {
  return(
    <>
      <div className="card">
        {/* <div className="circle">
          {props.img}
        </div> */}
        <div className="hex">
          {props.img}
        </div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default Card;