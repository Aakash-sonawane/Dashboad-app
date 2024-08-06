import React from 'react'
import TotalInfo from './components/TotalInfo'
// import CartIcon from './icons/CartIcon'
import Activity from './components/Activity'
import ActivityChart from './components/ActivityChart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faStar} from '@fortawesome/free-solid-svg-icons';
import FeedBack from './components/FeedBack';

export default function Dashboard({data}) {
  return (
    <div className='dashboard-wrapper'>
        <div className='container'>
            <div className='main-wrap'>
                <h1 className='heading'>Dashboard</h1>

                <div className='content-wrap'>
                    <div className='top-wrap'>
                        <div className='left-wrap'>
                            <ul>
                                <li>
                                    <TotalInfo
                                    title={'Total Orders'}
                                    quantity={75}
                                    earnings={{status:true,value:3}}
                                    icon="cart"
                                    />
                                </li>
                                <li>
                                    <TotalInfo
                                    title={'Total Delivered'}
                                    quantity={70}
                                    earnings={{status:false,value:3}}
                                    icon="bag"
                                    />
                                </li>
                                <li>
                                    <TotalInfo
                                    title={'Total Cancel'}
                                    quantity={5}
                                    earnings={{status:true,value:3}}
                                    icon="bag-cancel"
                                    />
                                </li>
                                <li>
                                    <TotalInfo
                                    title={'Total Revenue'}
                                    quantity={'$12K'}
                                    earnings={{status:false,value:3}}
                                    icon="revenue"
                                    />
                                </li>
                            </ul>
                            
                        </div>
                        <div className='right-wrap'>
                            <ul>
                                <li>
                                    <TotalInfo
                                    title={'Net Profit'}
                                    quantity={'$ 6759.25'}
                                    earnings={{status:false,value:3}}
                                    icon='donut'
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='middle-wrap'>
                        <div className='left-wrap'>
                            <h3 className='title-sc'>Activity</h3>
                            <div>
                                <ActivityChart/>
                            </div>
                        </div>
                        <div className='right-wrap'>
                            <ul className='list-wrap'>
                                <li>
                                    <Activity title="Goals" icon="goal" clName="item1"/>
                                </li>
                                <li>
                                    <Activity title="Popular dishes" icon="burger" clName="item1"/>
                                </li>
                                <li>
                                    <Activity title="Menus" icon="menu" clName="item1"/>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className='bottom-wrap'>
                        <div className='left-wrap'>
                            <h3 className='title-sc'>Recent Orders</h3>
                            <div>
                                <table>
                                    <thead>
                                        {/* <th> */}
                                            <th>Customer</th>
                                            <th>Order NO.</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        {/* </th> */}
                                    </thead>
                                    <tbody>
                                        {
                                            data.orders.map((order)=>{
                                                return(
                                                    <tr>
                                                        <td>
                                                            <div className='prof-wrap'>
                                                                <div className="icon-wrap">
                                                                    <FontAwesomeIcon icon={faUser} className="icon" />
                                                                </div>
                                                                <div className='title'>
                                                                    {order.customer}
                                                                </div>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>{order.order_no}</td>
                                                        <td>{order.amount}</td>
                                                        <td><div className={`${order.status==="Delivered"?"complete":"incomplete"}`}>{order.status}</div></td>
                                                    </tr> 
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='right-wrap'>
                        <h3 className='title-sc'>Customer's Feedback</h3>
                        
                        <FeedBack feedback={data.feedback}/>

                        </div>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}
