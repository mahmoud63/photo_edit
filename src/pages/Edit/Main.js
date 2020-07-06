import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes, faShareAlt, faEye, faDownload, faHome, faImage} 
  from '@fortawesome/free-solid-svg-icons';

function Main({setSideType, bg}){
  return (<>
    <img className="main-image h-100 w-100" src={`/static/images/${bg}.png`} alt="main 01" />

    <Link to="/gallery"><a href="#!">
      <span className="of-gallary">
        <FontAwesomeIcon icon={faImage} /> &nbsp; Gallery
      </span>
    </a></Link>

    <span className="of-tools">
      <FontAwesomeIcon className="mr-2" icon={faTimes} />
      <FontAwesomeIcon className="mr-2" icon={faShareAlt} />
      <FontAwesomeIcon className="mr-2" icon={faEye} />
      <FontAwesomeIcon className="" icon={faDownload} />
    </span>

    <span className="of-home" onClick={() => setSideType("details")}>
      <FontAwesomeIcon icon={faHome} />
    </span>
  </>);
};

export default Main;