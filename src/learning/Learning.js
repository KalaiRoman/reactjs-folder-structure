import React,{useState} from 'react'

function Learning() {

    const obj={
        id:1,
        name:"kalai"
    }


    const colors=["red","blue","orange","green","yellow","grey","orangered"]

    // object not change particluar value in javascript method

    // Object.defineProperty(obj,"id",{writable:false})
    // obj.id=2

  

    const [circles,setCircles]=useState([]);


    const handleClick=(e)=>{

        setCircles((pre)=>[
            ...pre,
            {
                id:Math.floor(Math.random()*867789897),
                x:e.clientX,
                y:e.clientY,
                bg:colors[Math.floor(Math.random()*colors?.length)]
            }
        ])
    }
   

    console.log(circles,'circles')

  return (
    <div onClick={handleClick} style={{cursor:"pointer",width:"100%",height:"100vh",overflow:"hidden"}}>
        {circles?.map((item,index)=>{
            return(
                <div style={{
                    width:"20px",
                    height:"20px",
                    background:item?.bg,
                    borderRadius:"50%",
                    cursor:"pointer",
                    position:"absolute",
                    left:`${item?.x}px`,
                    top:`${item?.y}px`
                }} key={index}>

                    </div>
            )
        })}
    </div>
  )
}

export default Learning