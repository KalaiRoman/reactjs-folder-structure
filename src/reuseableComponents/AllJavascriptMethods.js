import React, { useEffect, useState } from 'react'
import Functionparameters from './Functionparameters';

function AllJavascriptMethods() {

const {lists}=Functionparameters();

console.log(lists,'lists')

    const [flatmethod,setFlatMethod]=useState([1,2,[4,5],[7,8,9]]);
    // flat mthod
    const flatMathodChange=flatmethod.flat(Infinity);
    // objects handle Method
    const [obj,setObj]=useState({
        name:"kalai",
        address:"chennai",
        place:"chennai",
        pincode:"600010",
        mobileNo:"8778377119",

    });

    // name check in objcet models
    let hasName = obj.hasOwnProperty('name' &&  "place");
    console.log(hasName,'hasName')

const vw=["a","e","i","o","u"]

const names="kalaisuryai";

// call check in hiring

foo();
function foo() {
  console.log('kalaisuriya');
}


    
    useEffect(()=>{
var count=0;

var pushs=[]

        const Forms=new FormData();
        for(const [key,value] of Object.entries(obj))
            {
                Forms.append(`${key}`,value);
            }

            for (let char of names)
                {
                    if(vw?.includes(char))
                        {
                            pushs.push(char);
count++;
                        }
                }
    console.log(count,pushs.sort(),'count')

    },[])

  return {flatMathodChange,obj}
}

export default AllJavascriptMethods