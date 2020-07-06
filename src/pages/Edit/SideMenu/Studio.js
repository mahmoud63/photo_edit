import React from 'react';

import ThumbNail from './ThumbNail';

function Studio({type, changeBg}){

  const types = {
    favourites: [
      {imageSrc: "/static/images/wall-shapes.jpg", title: "Shapes"},
      {imageSrc: "/static/images/wall-roll.jpg", title: "Roll"},
    ],
    catalogs: [
      {imageSrc: "/static/images/wall-texture.png", title: "Texture"},
      {imageSrc: "/static/images/wall-shapes.jpg", title: "Shapes"},
      {imageSrc: "/static/images/wall-stone.jpg", title: "Stone"},
      {imageSrc: "/static/images/wall-geometry.jpg", title: "Geometry"},
      {imageSrc: "/static/images/wall-roll.jpg", title: "Roll"},
    ],
  }

  return (
    <article id="page-multicolumn" className="page-section text-center py-4">        
      <section className="container">
        <div className="row justify-content-center text-uppercase">
          {types && types[type].map(item => 
            <ThumbNail imageSrc={item.imageSrc} title={item.title} key={item.title} changeBg={changeBg} />
          )}
        </div>
      </section>
    </article>
  );
};

export default Studio;