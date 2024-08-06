import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope, faCog, faBell, faUser, faWindowMaximize} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="icon-container file-icon">
        <FontAwesomeIcon icon={faWindowMaximize} className="icon" />
        </div>
        <div className='search-wrap'>
          <FontAwesomeIcon icon={faSearch} className="icon" />
        <input type="text" placeholder="Search..." className="search-bar" />

        </div>
      </div>
      <div className="header-right">
        <div className="icon-wrap">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </div>
        <div className="icon-wrap">
            <FontAwesomeIcon icon={faCog} className="icon" />
        </div>
        <div className="icon-wrap">
            <FontAwesomeIcon icon={faBell} className="icon" />
        </div>
        <div className="icon-wrap">
            <FontAwesomeIcon icon={faUser} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
