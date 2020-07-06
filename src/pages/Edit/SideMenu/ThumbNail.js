import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ThumbNail({imageSrc, title, changeBg}){
  return (
    <section className="mb-5 col-10 col-md-6 box">
      <a href="#!" onClick={() => changeBg("logod")}>
        <img className="layout-image" src={imageSrc} alt={title} />
      </a>
      <span className="fav-feedback">
        <FontAwesomeIcon icon={faHeart}  />
      </span>
      <h5 className="layout-title pt-3 pl-3">{title}</h5>
    </section>
  );
};

export default ThumbNail;