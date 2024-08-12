import React, { memo } from 'react'

const InSide = memo(({incrment}) => {

    console.log("kalai")
  return (
    <div>
      <button onClick={incrment}>incrment</button>
    </div>
  )
})

export default InSide
