import React, {useState} from 'react';

import Main from './Main';
import SideMenu from './SideMenu';
import Details from './Details';
import './index.css';

function Edit(){

  const[sideType, setSideType] = useState("sidemenu");
  const [bg, changeBg] = useState("logo");

  return (<>
    <div className="container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-8 position-fixed bg-light h-100 main-view">
          <Main setSideType={setSideType} bg={bg} /> 
        </div>
        <div className="col-4 offset-8 bg-info">
          {sideType && sideType === "sidemenu" ? <SideMenu changeBg={changeBg} /> :  <Details setSideType={setSideType}/>}
        </div>
      </div>
    </div>
  </>);
};

export default Edit;