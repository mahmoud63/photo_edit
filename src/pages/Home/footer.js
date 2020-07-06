import React from 'react';
import BackdropFilter from 'react-backdrop-filter';

import StickyFooter from 'react-sticky-footer';
function Footer_() {
  return (
    <>
      <StickyFooter
        bottomThreshold={1000}
        normalStyles={{
          backgroundImage: 'url(/static/images/footer.png)',
          textAlign: 'center',
          height: '125px',
        }}
      >
        <BackdropFilter
          className="bluredForm"
          filter={'blur(10px) sepia(10%)'}
          canvasFallback={true}
          onDraw={() => {
            console.log('Rendered !');
          }}
        >
          <div className="mb-5 flex-center"></div>
          <div className="mb-5 flex-center"></div>

          <div className="mb-5 flex-center">
            <a className="fb-ic">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a className="tw-ic">
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a className="ins-ic">
              <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
          </div>
          <div className="mb-5 flex-center"></div>
        </BackdropFilter>
      </StickyFooter>
    </>
  );
}

export default Footer_;
