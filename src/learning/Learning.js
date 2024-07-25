// import React,{useState} from 'react'

// function Learning() {

//     const obj={
//         id:1,
//         name:"kalai"
//     }

//    const obj1={
//     place:"chennai",
//     __proto__:obj
//    }

//    console.log(obj1.name)


//     const colors=["red","blue","orange","green","yellow","grey","orangered"]
//     // object not change particluar value in javascript method
//     // Object.defineProperty(obj,"id",{writable:false,enumerable:false})
//     // obj.id=2
//     console.log(obj,'obj')
//     const [circles,setCircles]=useState([]);

//     const handleClick=(e)=>{

//         setCircles((pre)=>[
//             ...pre,
//             {
//                 id:Math.floor(Math.random()*867789897),
//                 x:e.clientX,
//                 y:e.clientY,
//                 bg:colors[Math.floor(Math.random()*colors?.length)]
//             }
//         ])
//     }
   

//     console.log(circles,'circles')

//   return (
//     <div onClick={handleClick} style={{cursor:"pointer",width:"100%",height:"100vh",overflow:"hidden"}}>
//         {circles?.map((item,index)=>{
//             return(
//                 <div style={{
//                     width:"20px",
//                     height:"20px",
//                     background:item?.bg,
//                     borderRadius:"50%",
//                     cursor:"pointer",
//                     position:"absolute",
//                     left:`${item?.x}px`,
//                     top:`${item?.y}px`
//                 }} key={index}>

//                     </div>
//             )
//         })}
//     </div>
//   )
// }

// export default Learning



// import React, { useState } from 'react'

// function Learning() {
//     const [data,setData]=useState([
//         {
//             id:1,
//             name:"kalai"
//         },
//         {
//             id:2,
//             name:"thala"
//         },
//         {
//             id:3,
//             name:"hari"
//         },
//         {
//             id:4,
//             name:"mani"
//         },
//         {
//             id:5,
//             name:"hari"
//         }
//     ]);

//     const callBack=(params)=>{
//   const allDatas=data?.findIndex((item)=>item?.id==params?.id);
//  if(allDatas)
//  {
//     const OverAll=[...data];
//     OverAll[allDatas].name="bala Karthick";
//     setData(OverAll);
//  }
//     }

//     console.log(data.length,"kl")

//   return (
//     <div>
//         {data?.map((item,index)=>{
//             if(item?.name=="hari")
//             {
//                 //  callBack(item);
//                 //  return null

//                 const ft=data[index].name = "harishkumar"

//                 console.log(ft,'ft')

//                 setData([...data,ft])

//             //    data[index] = {...data,...{"name" : "harish"}}


//             // console.log(data[index].name,ft,"kalai")

//             //    console.log(data[index] = {...item,...{"name" : "harish"}},"kalai")
//             //    setData(data[index] = {...item,...{"name" : "harish"}})
//                 // const Overll=[...data];
//                 // data[index].name="Sennu Vasan";

//                 // console.log(Overll,'Overll')
//                 // setData(data[index].name="Sennu Vasan")

               
//             }
//             else{
//                 return(
//                     <div key={index}>
//     {item?.name}
//                     </div>
//                 )
//             }
           
//         })}
//     </div>
//   )
// }

// export default Learning





import React from 'react'

function Learning() {
  return (
    <div>Learning</div>
  )
}

export default Learning