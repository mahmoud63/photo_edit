import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './nav';
import Carousel_ from './carousel';
import Footer_ from './footer';
import Body from './body';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'reactjs-navbar/dist/index.css';

function Home() {
  return (
    <>
      <Nav />
      <Carousel_ />
      {/* <div className="container">
        <h3>Home</h3>
        <ul>
          <li>
            <Link to="/gallery">
              <a href="#!">Gallery</a>
            </Link>
          </li>
          <li>
            <Link to="/edit">
              <a href="#!">Edit</a>
            </Link>
          </li>
        </ul>
      </div>
      */}
      <Body />
      <Footer_ />
    </>
  );
}

export default Home;
