import React,{useEffect, useState} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

function QueryParams() {

    const [searchParams, setSearchParams] = useSearchParams()

console.log(searchParams.get("Name"))
    const history=useNavigate();

    const [searchName,setSearchName]=useState("");
    

    const data=[
        {
            id:1,
            name:"kalai",
            place:"chennai"
        },
        {
            id:2,
            name:"kalaisurya",
            place:"chennai"
        },
        {
            id:3,
            name:"mani",
            place:"chennai"
        },
        {
            id:4,
            name:"kalai",
            place:"chennai"
        },
        {
            id:5,
            name:"thala",
            place:"chennai"
        },
        {
            id:6,
            name:"mani",
            place:"chennai"
        }
    ]

    const [over,setOver]=useState(data);
    const hanldeSearch=()=>{
if(searchName)
{
    history(`/query?Name=${searchName}`);

}
    }
    const NameUser=searchParams.get("Name");


    useEffect(()=>{

        if(NameUser)
        {
            const gt=data?.filter((item)=>item?.name==NameUser);
            setOver(gt)
        }


        if(searchName?.length===0)
        {
            setOver(data);
        }
        
    },[NameUser,searchName])
  return (
    <div>
        <div className='ms-4 mt-4 mb-5'>
            <input type="text" placeholder='Please Enter Serach Box' className='p-4 rounded w-[100px]'
            onChange={(e)=>setSearchName(e.target.value)}
            value={searchName}
            />
            <div className='mt-4'>
                <button className='p-3 border-none rounded' onClick={hanldeSearch}>Search</button>
            </div>
        </div>
        <div>
            {over?.map((item,index)=>{
                return(<div key={index} className='mb-3 mt-4 ms-5 fw-bold fs-4'>
                {item?.name}
                </div>)
            })}
        </div>
    </div>
  )
}

export default QueryParams