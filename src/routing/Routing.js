import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PathRoutingLists } from '../middleware/RoutingPaths/RoutingPaths'
function Routing() {
  return (
    <>
         <Routes>
                {PathRoutingLists?.map((item,index)=>{
                    const {path,
                        exact,
                        component}=item
                        return(
                            <Route exact={exact} path={path} element={component} key={index}></Route>
                        )
                })}
            </Routes>
    </>
  )
}

export default Routing