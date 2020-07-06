import React from 'react';

import Navbar from 'reactjs-navbar';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
  faGlobe,
  faChartPie,
  faCogs /*...*/,
  faUpload,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import 'reactjs-navbar/dist/index.css';

function Nav() {
  return (
    <>
      <Navbar
        menuItems={[
          {
            title: 'View Demo',
            icon: faImage,
            isAuth: true,
          },
          {
            title: 'Select Image',
            icon: faUpload,
            isAuth: true,
          },
        ]}
      />
    </>
  );
}

export default Nav;
