import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faStar} from '@fortawesome/free-solid-svg-icons';



export default function FeedBack({feedback}) {
  return (
    <ul>
       {
         feedback.map((feed)=>{
             return(
                 <li>
                    <div>
                        <div className='prof-wrap'>
                            <div className="icon-wrap">
                                <FontAwesomeIcon icon={faUser} className="icon" />
                            </div>
                            <div className='title'>
                                {feed.customer}
                            </div>
                        </div>
                        <div className='rating'>
                            {
                                feed.rating.map(el=>{
                                    return(
                                        el?<FontAwesomeIcon icon={faStar} className='fill' />:
                                        <FontAwesomeIcon icon={faStar} className='empty' />
                                    )
                                })
                            }
                        </div>
                        <div className='comment'>{feed.comment}</div>
                    </div>
                </li>
            )
            })
       }
    </ul>
  )
}
