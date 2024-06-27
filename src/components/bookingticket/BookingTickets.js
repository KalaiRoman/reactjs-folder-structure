import React, { useState } from 'react'
import './Booking.scss';
function BookingTickets() {
  const [book,setBook]=useState([]);

  var error;

  const handleChange=async(paramsid)=>{
    try {
      if(book?.includes(paramsid))
        {
          const filterId=book?.filter((item)=>item!==paramsid);
          setBook(filterId);
        }
        else{
          setBook([...book,paramsid])
        }
    } catch (error) {
      error="Error on Server"
    }
  }
  return (
    <div className='main-ticket'>
<div className='inside-ticket'>
<div className='top-section-ticket'>
<div className='left-card-ticket'>
<div className='row gap-3 mb-3 mt-3'>
{Array(100*2)?.fill("null")?.map((item,index)=>{
  return(
    <div className={book?.includes(index+1)?"boxactive":"inactivebox"} onClick={()=>handleChange(index+1)} key={index}>
    </div>
  )
})}
</div>
</div>
<div className='right-card-ticket'>
<div className='row gap-3 mb-3 mt-3'>
{Array(101*2)?.fill("null")?.map((item,index)=>{
  return(
    <div className={book?.includes(index+1)?"boxactive":"inactivebox"} onClick={()=>handleChange(index+1)} key={index}>
    </div>
  )
})}
</div>
</div>
</div>
<div className='bottom-section-ticket'>
    
</div>
</div>
    </div>
  )
}

export default BookingTickets