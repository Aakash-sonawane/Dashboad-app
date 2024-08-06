import React from 'react'
import CartIcon from '../icons/CartIcon'
import BagIcon from '../icons/BagIcon'
import DonutChart from '../icons/DonutChart'
import GoalIcon from '../icons/GoalIcon'
import BurgerIcon from '../icons/burgerIcon'
import DinnerIcon from '../icons/dinnerIcon'

export default function Activity ({title,icon,clName}) {
  return (
    <div className={`content-wrap ${clName}`}>
        <div className='content-top'>

           {icon==="goal" && <GoalIcon/>}
           {icon==="burger" && <BurgerIcon/>}
           {icon==="menu" && <DinnerIcon/>}
        
            <div className='title'>{title}</div>
        </div>
        <div className='cta'>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                <path d="M3.04348 0H0L3.95652 5.25L0 10.5H3.04348L7 5.25L3.04348 0Z" fill="#585858" />
            </svg>
        </div>
    </div>
  )
}
