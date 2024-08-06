import React from 'react'
import CartIcon from '../icons/CartIcon'
import BagIcon from '../icons/BagIcon'
import DonutChart from '../icons/DonutChart'
import FaHandHoldingDollar from '../icons/faHandHoldingDollar'

export default function TotalInfo({title,quantity,earnings,icon}) {
  return (
    <div className='card'>

           {icon==="cart" && <CartIcon/>}
           {(icon==="bag" || icon==="bag-cancel") && <BagIcon clName={icon==="bag"?true:false}/>}
           {icon==="donut" && <DonutChart/>}
           {icon==="revenue" && <FaHandHoldingDollar/>}

        <div className='content'>
            <div className='title'>{title}</div>
            <div className='qnt-desc'>{quantity}</div>
            <div className={`indicator ${earnings.status?'green-zone':'red-zone'}`}>
              <div className='tringle'></div>
              {earnings.value}%
            </div>
        </div>
    </div>
  )
}
