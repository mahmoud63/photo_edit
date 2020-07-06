import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThLarge, faHeart} 
  from '@fortawesome/free-solid-svg-icons';

function Tabs({setTab}){

  const [active, setActive] = useState("catalogs");
  function handleClick(name){
    setActive(name);
    setTab(name)
  }

  return (
    <div className="row no-gutters sticky-top bg-secondary tab" 
    style={{height:'10vh', borderBottom:'1px solid #666'}}>
      <div className={`col-6 h-100 ${active === 'catalogs' ? 'active' : ''}`} 
      onClick={() => handleClick("catalogs")}>
        <FontAwesomeIcon icon={faThLarge} /> &nbsp; CATALOGS
      </div>
      <div className={`col-6 h-100 ${active === 'favourites' ? 'active' : ''}`} 
      onClick={() => handleClick("favourites")}>
        <FontAwesomeIcon icon={faHeart} /> &nbsp; FAVOUTITES
      </div>
    </div>
  );
};

export default Tabs;