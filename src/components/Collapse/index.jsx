import React, { useState } from "react";
import iconeCollapse from "../../assets/collapse-icone.svg";


export default function Collapse({ title, details }) {
    const [open, setOpen] = useState(false);
    function handleClick(){
        setOpen(!open);
    }
    const classeDiv = open ? 'collapse__btn__active ' : 'collapse__btn__disabled';

  return (
    <div className='collapse'>
      <p className="collapse__btn btn">
        <span className="btn__title">{title}</span>
        <img className={`btn ${classeDiv}`} src={iconeCollapse} alt="" onClick={handleClick}/>
      </p>
   
      <p className={`collapse__details ${open ? 'open' : ''}`}>{details}</p>
    
    </div>
  );
}
