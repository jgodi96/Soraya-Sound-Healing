import React from 'react'
import Button from '../button/button.components'
import './book-button-container.styles.scss'

const AvailableTimes = [
    {
        id:1,
        time:"10:30am"
    },
    {   id:2,
        time:"12:30pm"
    }
]
const BookButtonContainer = () => {
  return (
    <div className="book-button-container">

      {  AvailableTimes.map(({id,time})=>{
        return(
            <Button buttonType = 'bookTime' key={id}>{time}</Button>
        )
            
        })}
        
    </div>
  )
}

export default BookButtonContainer