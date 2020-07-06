import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faTimes } from '@fortawesome/free-solid-svg-icons';

function Details({setSideType}){
  return (
    <div className="container-fluid px-0">  
      
      <div className="row no-gutters sticky-top bg-secondary tab" style={{height:'10vh'}}>
        <div className="col-12 h-100 active" >
          <div className="w-100 px-3">
            <div className="float-left">
              <FontAwesomeIcon icon={faThLarge} /> &nbsp; Details
            </div>
            <div className="float-right closeDetails" onClick={() => setSideType("sidemenu")}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
      </div>

      <div className="row no-gutters" style={{height:'90vh', overflowY:'auto', overflowX: 'hidden'}}>
        <div className="col-12 bg-white px-4 text-center">
        
          <section className="my-3 col-10 col-md-6 box">
            <a href="#!">
              <img className="layout-image" src="/static/images/wall-texture.png" alt="Shapes" />
            </a>
            <h5 className="layout-title pt-3 pl-3">Texture</h5>
          </section>

          <hr/>
          <p className="text-left">some details .... </p>

        </div>
      </div>

    </div>
  );
};

export default Details;