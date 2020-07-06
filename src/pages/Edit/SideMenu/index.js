import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Tabs from './Tabs';
import Studio from './Studio';

function SideMenu({changeBg}){

  const [tabType, setTabType] = useState("catalogs");

  return (
    <div className="container-fluid px-0">  
      
      <Tabs setTab={setTabType}/>
      
      <div className="row no-gutters" style={{height:'90vh', overflowY:'auto', overflowX: 'hidden'}}>
        <div className="col-12 bg-white px-4 text-center">
        
          <div className="form-group has-search mt-4">
            <FontAwesomeIcon className="form-control-feedback" icon={faSearch} />
            <input type="text" className="form-control" placeholder="Search" />
          </div>

          <Studio type={tabType} changeBg={changeBg} />

        </div>
      </div>

    </div>
  );
};

export default SideMenu;