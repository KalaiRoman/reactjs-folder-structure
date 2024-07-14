import React from 'react'

function Hoc(Component) {

  const data={
    name:"kalaisuryahomepage"
  }
  return ()=><Component value={data}/>

}

export default Hoc