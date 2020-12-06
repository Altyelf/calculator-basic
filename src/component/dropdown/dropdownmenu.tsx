import { useState, useRef } from "react";
import style from "./component/dropdown/dropdownmenu"
import React from "react";

const Dropdownmenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className='menu-containter'>
      <button 
      onClick={() => onClick()}>
        Choose
        </button>
        <div className='nav'>
        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul className='list'>
        <li> + </li>
        <li> - </li>
        <li> * </li>
        <li> / </li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Dropdownmenu;
