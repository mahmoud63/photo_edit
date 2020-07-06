import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'reactjs-navbar/dist/index.css';

function Carousel_() {
  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        dynamicHeight={false}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
      >
        <div>
          <img src="/static/images/home.png" />
        </div>
        <div>
          <img src="/static/images/home.png" />
        </div>
      </Carousel>
    </>
  );
}

export default Carousel_;
