import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../../redux/Reducer/Login_Reducer';
import UserData from '../../reuseableComponents/UserData';
function Login() {
  const dispatch=useDispatch();
  const state=useSelector((state)=>state?.login);
  const {data,listData}=UserData();

  useEffect(()=>{
    const data={
      name:"bala",
      address:"chennai"
    }
    if(data){
      dispatch(LoginUser(data));
    }
  },[])
  return (
    <div>Login
{data} <div>
  {listData?.map((item,index)=>item)}
</div>

    </div>
  )
}
export default Login