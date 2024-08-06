import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faChartSimple, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className='icon-wrap active'>
      <FontAwesomeIcon icon={faHome} className="icon" />
    </div>
      <div className='icon-wrap'>
        <FontAwesomeIcon icon={faChartSimple} className="icon" />
      </div>
      <div className='icon-wrap'>
        <FontAwesomeIcon icon={faWallet} className="icon" />
      </div>
      <div className='icon-wrap'>
        <FontAwesomeIcon icon={faClipboardCheck} className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
